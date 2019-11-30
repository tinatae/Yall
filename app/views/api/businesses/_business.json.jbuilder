json.extract! business, :id, :name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2, :pricepoint, :monopen, :monclose, :monopenend, :moncloseend, :tuesopen, :tuesclose, :tuesopenend, :tuescloseend, :wedopen, :wedclose, :wedopenend, :wedcloseend, :thursopen, :thursclose, :thursopenend, :thurscloseend, :friopen, :friclose, :friopenend, :fricloseend, :satopen, :satclose, :satopenend, :satcloseend, :sunopen, :sunclose, :sunopenend, :suncloseend, :average_rating
json.photoUrls business.photos.map {|file| url_for(file)} 

# if business.photos.attached?
#     json.photoUrl url_for(business.photos[0]) 
# end


   
