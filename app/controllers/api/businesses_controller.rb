class Api::BusinessesController < ApplicationController
  before_action :require_login, only: [:create]
  
  def index
   if params[:searchQuery]
      businesses = Business.where("name LIKE ?", "%" + params[:searchQuery] + "%").or(Business.where("category LIKE ?", "%" + params[:searchQuery] + "%" ))
   else
      Business.all
   end

    businesses = bounds ? businesses.in_bounds(bounds) : businesses
    # businesses = bounds ? Business.in_bounds(bounds) : Business.all

    if params[:minPricepoint] && params[:maxPricepoint]
      businesses = businesses.where(pricepoint: price_range)
    end

    if params[:filterCategory] == "All"
      businesses = businesses
    else
      businesses = businesses.where(category: params[:filterCategory]) 
    end


    if params[:filterOpenNow] == "Yes"
      openhour = weekday + "open"
      closehour = weekday + "close" 
      currenthour = Time.now.hour
    
      # if params[:"#{openhour}"] < params[:"#{closehour}"]
      
      businesses = businesses.where("#{openhour} <= '#{currenthour}' and #{closehour} >= '#{currenthour}'")   
      # elsif params[:"#{openhour}"] > params[:"#{closehour}"]
      # businesses = businesses.where("#{openhour} <= '#{currenthour}' and #{closehour} >= '#{currenthour}'")
      # businesses = businesses.where("#{openhour} >= '?'", currenthour)      
    else
      businesses
    end

    if params[:filterDelivery] == "Yes"
      businesses = businesses.where(delivery: params[:filterDelivery])
    else
      businesses
    end

    if params[:filterTakeout] == "Yes"
      businesses = businesses.where(takeout: params[:filterTakeout])
    else
      businesses
    end

    # if params[:filterRating]
    #   businesses.sort_by {|business| business.rated}.reverse
    # end

    @businesses = businesses.includes(:reviews)

    render :index
  end

  def create
    @business = Business.create!(business_params)
    render :show
  end


  def show
    @business = Business.with_attached_photos.find(params[:id])
  end

  private

  def price_range
    (params[:minPricepoint]..params[:maxPricepoint])
  end

  def weekday
    days_of_week = {0 => "sun", 1 => "mon", 2 => "tues", 3 => "wed", 4 => "thurs", 5 => "fri", 6 => "sat"}
    days_of_week[Time.now.wday]
  end

  # def hour_range
  #   openhour = weekday + "open"
  #   closehour = weekday + "close"
  #   "(params[:#{openhour}]..params[:#{closehour}])"
  # end

  def business_params
    params.require(:business).permit(:name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2, :pricepoint, :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, :sunopen, :sunclose, :delivery, :takeout, photos: [])
  end

  def bounds
    params[:bounds]
  end

  
end

     # businesses = businesses.where("'params[:#{openhour}] <= ?'", currenthour) #returns 'sunopen > 20'
      # businesses = businesses.where("'#{openhour}: params[:#{openhour}] <= ?'", 10) #returns 'sunopen > 20'
      # businesses = businesses.where("'#{openhour}: params[:#{openhour}] <= #{currenthour}'") #returns 'sunopen > 20'
    
