
class Business < ApplicationRecord
    validates :name, :lat, :lng, :address1, :address2, presence: true
    validates :monopen, :monclose, :monopenend, :moncloseend, presence: true
    validates :tuesopen, :tuesclose, :tuesopenend, :tuescloseend, presence: true 
    validates :wedopen, :wedclose, :wedopenend, :wedcloseend, presence: true 
    validates :thursopen, :thursclose, :thursopenend, :thurscloseend, presence: true
    validates :friopen, :friclose, :friopenend, :fricloseend, presence: true  
    validates :satopen, :satclose, :satopenend, :satcloseend, presence: true
    validates :sunopen, :sunclose, :sunopenend, :suncloseend, presence: true  
    validates :name, uniqueness: true
    validates :category, inclusion: {in: ["All", "Restaurants", "Coffee & Tea", "Bars"]}, presence: true
    validates :pricepoint, inclusion: { in: (1..4) }
    validates :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, :sunopen, :sunclose, inclusion: { in: (1..12) }
    validates :delivery, :takeout, inclusion: {in: ["Yes", "No"]}

    # scope :named, -> (name) {where("name LIKE ?", name)}

    has_many :reviews

    has_many_attached :photos

    # def named(name)
    #     where("name LIKE ?", name)
    # end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    def rated
        self.reviews.average(:rating)
    end

    def average_rating
        avgrev = reviews.average(:rating)
        return "No reviews yet!" if avgrev == 0 || avgrev.nil?
        if (avgrev%1) == 0
            return ("★")*(avgrev)
        elsif (avgrev%1) >= 0.95
            # return ("★")*(avgrev.to_i)+"★ ( we're off by " + (1-(avgrev%1)).to_s + " of a ★, so pretty much ! )"
            return ("★")*(avgrev.to_i)+"★"
        elsif (avgrev%1) >= 0.80
            return ("★")*(avgrev.to_i)+("⅘")
        elsif (avgrev%1) >= 0.75
            return ("★")*(avgrev.to_i)+("¾")
        elsif (avgrev%1) >= 0.6
            return ("★")*(avgrev.to_i)+("⅗")
        elsif (avgrev%1) >= 0.5
            return ("★")*(avgrev.to_i)+("½")
        # elsif (avgrev%1) >= 0.4
        #     return ("★")*(avgrev.to_i)+("⅖")
        elsif (avgrev%1) >= 0.33
            return ("★")*(avgrev.to_i)+("⅓")
        elsif (avgrev%1) >= 0.25
            return ("★")*(avgrev.to_i)+("¼")
        end   
    end

    def dollarmaker
        "$"*self.pricepoint
    end

    def recentreview
        return 'No reviews yet!' if self.reviews.length == 0
        self.reviews[-1].body
    end

    def reviewcount
        return 'No reviews' if self.reviews.nil?
        if self.reviews.length == 1
            return "1 review"
        else
            self.reviews.length.to_s + " reviews"
        end

    end
end
