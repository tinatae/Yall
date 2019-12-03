@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business  
        
        # if business.photos.attached?
        json.photoUrl url_for(business.photos[0]) 
        # end

        # json.reviewIds business.reviews.pluck(:id)
        # json.reviews
        json.reviewIds []

        # json.business.review do
        #     json.set! business.review.id do
        #         json.extract! business.review, :id, :body
        #     end
        # end
    end
end