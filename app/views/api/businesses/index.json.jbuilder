@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business  
        json.reviewIds []
       
        # json.extract! business, :id, :name, :address1, :address2, :phonenumber, :id, :category, :average_rating
    end
end

# NOTE THAT THE partial ABOVE SPLITS phonenumber AFTER '-'
# ALSO NOTE INDEX DOES NOT SHOW WEBSITE
# STILL SHOWS average_rating


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


