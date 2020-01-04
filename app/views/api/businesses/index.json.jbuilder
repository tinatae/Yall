@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business  
        
        json.photoUrl url_for(business.photos[0]) 
    
        json.reviewIds []

        # json.business.review do
        #     json.set! business.review.id do
        #         json.extract! business.review, :id, :body
        #     end
        # end
    end
end