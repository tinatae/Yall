# == Schema Information
#
# Table name: businesses
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  ratings     :integer
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

    has_many :reviews
end
