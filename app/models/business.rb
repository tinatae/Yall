
class Business < ApplicationRecord
    validates :name, :lat, :lng, :address1, :city, :state, presence: true
    validates :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, presence: true 
    validates :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, presence: true
    validates :sunopen, :sunclose, presence: true  
    validates :vegetarian, :vegan, :creditcard, :wheelchair, :goodforkids, :goodforgroups, :outdoor, :wifi, :dogsallowed, presence: true  
    validates :name, uniqueness: true 
    validates :category, inclusion: {in: ["All", "Restaurants", "Coffee & Tea", "Bars", "Dessert"]}
    validates :pricepoint, inclusion: { in: (1..4) }
    # validates :monopen, :monclose, :inclusion => { in: (0..30)}, :allow_nil => true,
    validates :delivery, :takeout, inclusion: {in: ["All", "Yes", "No"]}

    # scope :named, -> (name) {where("name LIKE ?", name)}

    has_many :reviews

    has_many_attached :photos
    # has_one_attached :photo

    # def named(name)
    #     where("name LIKE ?", name)
    # end

    # def rated
    #     self.reviews.average(:rating)
    # end


    def average_rating
        avgrev = reviews.average(:rating)
        
        if avgrev == 0 || avgrev.nil?
            avgrev = 0
        else
            avgrev 
        end
    end

    def dollarmaker
        "$"*self.pricepoint
    end

    def recentreview
        return 'No reviews yet!' if self.reviews.length == 0
        self.reviews.reverse.each {|review| return review.body if review.rating >= 4}
        self.reviews.reverse.each {|review| return review.body if review.rating >= 3}
        self.reviews.reverse.each {|review| return review.body if review.rating >= 2}
        self.reviews.reverse.each {|review| return review.body if review.rating >= 1}
    end

    def reviewcount
        return 'No Reviews' if self.reviews.nil?
        if self.reviews.length == 1
            return "1 review"
        else
            self.reviews.length.to_s + " reviews"
        end
    end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    def self.monhours
        prevday = Time.now.hour + 24
        self.where("? BETWEEN monopen AND monclose", Time.now.hour).or(where("? BETWEEN sunopen AND sunclose", prevday))
    end

    def self.tueshours
        prevday = Time.now.hour + 24
        self.where("? BETWEEN tuesopen AND tuesclose", Time.now.hour).or(where("? BETWEEN monopen AND monclose", prevday))
    end

    def self.wedhours
        prevday = Time.now.hour + 24
        self.where("? BETWEEN wedopen AND wedclose", Time.now.hour).or(where("? BETWEEN tuesopen AND tuesclose", prevday))
    end

    def self.thurshours
        prevday = Time.now.hour + 24
        self.where("? BETWEEN thursopen AND thursclose", Time.now.hour).or(where("? BETWEEN wedopen AND wedclose", prevday))
    end

    def self.frihours
        prevday = Time.now.hour + 24
        self.where("? BETWEEN friopen AND friclose", Time.now.hour).or(where("? BETWEEN thursopen AND thursclose", prevday))
    end

    def self.sathours
        prevday = Time.now.hour + 24
        self.where("? BETWEEN satopen AND satclose", Time.now.hour).or(where("? BETWEEN friopen AND friclose", prevday))
    end

    def self.sunhours
        prevday = Time.now.hour + 24
        self.where("? BETWEEN sunopen AND sunclose", Time.now.hour).or(where("? BETWEEN satopen AND satclose", prevday))
    end

    def self.open           
        if Time.now.wday == 0
            self.sunhours
        elsif Time.now.wday == 1
            self.monhours
        elsif Time.now.wday == 2
            self.tueshours
        elsif Time.now.wday == 3
            self.wedhours
        elsif Time.now.wday == 4
            self.thurshours
        elsif Time.now.wday == 5
            self.frihours
        else
            self.sathours
        end
    end

end
