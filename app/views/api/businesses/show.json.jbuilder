json.business do 
    json.partial! '/api/businesses/business', business: @business
end

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

    # params.require(:business).permit(:name, :category, :ratings, :lat, :lng )