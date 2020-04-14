json.extract! business, :id, :name, :category, :lat, :lng, :website, :phonenumber, :address1, :city, :state, :zipcode, :pricepoint, :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, :sunopen, :sunclose, :delivery, :takeout, :vegetarian, :vegan, :takesreservation, :creditcard, :googlepay, :applepay, :parking, :wheelchair, :goodforkids, :goodforgroups, :outdoor, :wifi, :dogsallowed, :genderneutralrestroom, :average_rating, :dollarmaker, :recentreview, :reviewcount
json.photoUrls business.photos.map {|file| url_for(file)}

# json.reviewIds 
# json.extract! business.reviews, :id, :body



   
