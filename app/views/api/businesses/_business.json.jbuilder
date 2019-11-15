json.extract! business, :name, :average_rating, :category, :website, :phonenumber, :address1, :address2

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

    # params.require(:business).permit(:name, :category, :lat, :lng )