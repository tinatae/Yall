
class Business < ApplicationRecord
    validates :name, :lat, :lng, :address1, :address2, presence: true
    validates :monopen, :monclose, presence: true
    validates :tuesopen, :tuesclose, presence: true 
    validates :wedopen, :wedclose, presence: true 
    validates :thursopen, :thursclose, presence: true
    validates :friopen, :friclose, presence: true  
    validates :satopen, :satclose, presence: true
    validates :sunopen, :sunclose, presence: true  
    validates :name, uniqueness: true
    validates :category, inclusion: {in: ["All", "Restaurants", "Coffee & Tea", "Bars", "Dessert"]}
    validates :pricepoint, inclusion: { in: (1..4) }
    # validates :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, :sunopen, :sunclose, :inclusion => { in: (0..24)}, :allow_nil => true,
    # validates :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, :sunopen, :sunclose, inclusion: { in: 0..24 }
    validates :delivery, :takeout, inclusion: {in: ["All", "Yes", "No"]}

    # scope :named, -> (name) {where("name LIKE ?", name)}

    has_many :reviews

    has_many_attached :photos
    # has_one_attached :photo

    # def named(name)
    #     where("name LIKE ?", name)
    # end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    # def rated
    #     self.reviews.average(:rating)
    # end

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
        return 'No Reviews' if self.reviews.nil?
        if self.reviews.length == 1
            return "1 review"
        else
            self.reviews.length.to_s + " reviews"
        end
    end

    def self.open?
        days_of_week = {0 => "sun", 1 => "mon", 2 => "tues", 3 => "wed", 4 => "thurs", 5 => "fri", 6 => "sat"}
   
        day = days_of_week[Time.now.wday]
        openhour = day + "open" # "sunopen"
        closehour = day + "close" # "sunclose"
        currenthour = Time.now.hour

        if self[openhour] < self[closehour]
            self.where("currenthour BETWEEN ? AND ?", self[openhour], self[closehour])
        elsif self[closehour] < self[openhour]
            (self[openhour..23]) + (0..self[closehour])
        end
            
        "No"
    end

end
