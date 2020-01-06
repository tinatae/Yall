json.extract! business, :id, :name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2, :pricepoint, :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, :sunopen, :sunclose, :delivery, :takeout, :average_rating, :dollarmaker, :recentreview, :reviewcount
json.photoUrls business.photos.map {|file| url_for(file)}
# json.reviewIds 
# json.extract! business.reviews, :id, :body

# if business.photos.attached?
#     json.photoUrl url_for(business.photos[0]) 
# end


   
