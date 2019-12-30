json.extract! business, :id, :name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2, :pricepoint, :monopen, :monclose, :monopenend, :moncloseend, :tuesopen, :tuesclose, :tuesopenend, :tuescloseend, :wedopen, :wedclose, :wedopenend, :wedcloseend, :thursopen, :thursclose, :thursopenend, :thurscloseend, :friopen, :friclose, :friopenend, :fricloseend, :satopen, :satclose, :satopenend, :satcloseend, :sunopen, :sunclose, :sunopenend, :suncloseend, :delivery, :takeout, :average_rating, :dollarmaker, :recentreview, :reviewcount
json.photoUrls business.photos.map {|file| url_for(file)}
# json.reviewIds 
# json.extract! business.reviews, :id, :body

# if business.photos.attached?
#     json.photoUrl url_for(business.photos[0]) 
# end


   
