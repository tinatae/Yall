@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business  
        
        if business.photos.attached?
            json.photoUrl url_for(business.photos[0]) 
        end
       
        json.reviewIds []
    end
end

# ALSO NOTE INDEX DOES NOT SHOW WEBSITE
# STILL SHOWS average_rating

 
