json.extract! business, :id, :name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2, :pricepoint, :average_rating
json.photoUrls business.photos.map {|file| url_for(file)} 

# if business.photos.attached?
#     json.photoUrl url_for(business.photos[0]) 
# end


   
