json.business do 
    json.partial! '/api/businesses/business', business: @business
end

@business.reviews.includes(:author).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review:review
        end
    end

    json.authors do 
        json.set! review.author.id do 
            json.extract! review.author, :username
        end
    end
end

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
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

