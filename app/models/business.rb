# == Schema Information
#
# Table name: businesses
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  category    :string
#  lat         :float            not null
#  lng         :float            not null
#  website     :string
#  phonenumber :string
#  address1    :string           not null
#  address2    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Business < ApplicationRecord
    validates :name, :lat, :lng, :address1, :address2, presence: true
    validates :name, uniqueness: true
    validates :category, inclusion: {in: ["Coffee & Tea", "Bars", "Restaurants"]}, presence: true
    validates :pricepoint, inclusion: { in: (1..3) }

    has_many :reviews

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    def average_rating
        avgrev = reviews.average(:rating)
        # avgrev.round(1)
    end

end
