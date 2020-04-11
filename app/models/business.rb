
class Business < ApplicationRecord
    validates :name, :lat, :lng, :address1, :city, :state, presence: true
    validates :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, presence: true 
    validates :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, presence: true
    validates :sunopen, :sunclose, presence: true  
    validates :vegetarian, :vegan, :creditcard, :wheelchair, :goodforkids, :goodforgroups, :outdoor, :wifi, :dogsallowed, presence: true  
    validates :name, uniqueness: true
    validates :category, inclusion: {in: ["All", "Restaurants", "Coffee & Tea", "Bars", "Dessert"]}
    validates :pricepoint, inclusion: { in: (1..4) }
    # validates :monopen, :monclose, :inclusion => { in: (0..24)}, :allow_nil => true,
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

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    def self.open
        days_of_week = {0 => "sun", 1 => "mon", 2 => "tues", 3 => "wed", 4 => "thurs", 5 => "fri", 6 => "sat"}
   
        day = days_of_week[Time.now.wday]
        prevday = days_of_week[Time.now.wday-1]

        prevopenhour = prevday + "open"
        prevclosehour = prevday + "close"

        openhour = day + "open" # "sunopen"
        closehour = day + "close" # "sunclose" CONCAT CHANGES ARRAY

        currenthour = Time.now.hour
      
        if currenthour >= 4
        # if openhour < closehour
        # if self[openhour] < self[closehour]

            # self.where("currenthour BETWEEN ? AND ?", 'self[openhour]', 'self[closehour]')
            self.where("currenthour BETWEEN ? AND ?", 'openhour', 'closehour')

        # elsif currenthour < 6 && prevclosehour < prevopenhour
        elsif currenthour < 6 
            # && self[prevclosehour] < self[prevopenhour]

            self.where("currenthour BETWEEN ? AND ?", '0', 'prevclosehour')
            # self.where("currenthour BETWEEN ? AND ?", '0', 'self[prevclosehour]')

        # elsif currenthour > 17 && closehour < openhour
        elsif currenthour > 17 
            # && self[closehour] < self[openhour]

            self.where("currenthour BETWEEN ? AND ?", 'openhour', '23')
            # self.where("currenthour BETWEEN ? AND ?", self[openhour], 23)
        end
    end

end
