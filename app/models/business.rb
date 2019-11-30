# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  category      :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  website       :string
#  phonenumber   :string
#  address1      :string           not null
#  address2      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  pricepoint    :integer          not null
#  monopen       :integer          not null
#  monclose      :integer          not null
#  monopenend    :string           not null
#  moncloseend   :string           not null
#  tuesopen      :integer          not null
#  tuesclose     :integer          not null
#  tuesopenend   :string           not null
#  tuescloseend  :string           not null
#  wedopen       :integer          not null
#  wedclose      :integer          not null
#  wedopenend    :string           not null
#  wedcloseend   :string           not null
#  thursopen     :integer          not null
#  thursclose    :integer          not null
#  thursopenend  :string           not null
#  thurscloseend :string           not null
#  friopen       :integer          not null
#  friclose      :integer          not null
#  friopenend    :string           not null
#  fricloseend   :string           not null
#  satopen       :integer          not null
#  satclose      :integer          not null
#  satopenend    :string           not null
#  satcloseend   :string           not null
#  sunopen       :integer          not null
#  sunclose      :integer          not null
#  sunopenend    :string           not null
#  suncloseend   :string           not null
#

class Business < ApplicationRecord
    validates :name, :lat, :lng, :address1, :address2, presence: true
    validates :monopen, :monclose, :monopenend, :moncloseend, presence: true
    validates :tuesopen, :tuesclose, :tuesopenend, :tuescloseend, presence: true 
    validates :wedopen, :wedclose, :wedopenend, :wedcloseend, presence: true 
    validates :thursopen, :thursclose, :thursopenend, :thurscloseend, presence: true
    validates :friopen, :friclose, :friopenend, :fricloseend, presence: true  
    validates :satopen, :satclose, :satopenend, :satcloseend, presence: true
    validates :sunopen, :sunclose, :sunopenend, :suncloseend, presence: true  
    validates :name, uniqueness: true
    validates :category, inclusion: {in: ["Coffee & Tea", "Bars", "Restaurants"]}, presence: true
    validates :pricepoint, inclusion: { in: (1..3) }

    has_many :reviews

    has_many_attached :photos

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
