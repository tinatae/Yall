@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business  
        json.reviewIds []
    end
end

# ALSO NOTE INDEX DOES NOT SHOW WEBSITE
# STILL SHOWS average_rating



