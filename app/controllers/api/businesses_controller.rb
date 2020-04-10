class Api::BusinessesController < ApplicationController
  before_action :require_login, only: [:create]
  
  def index

    businesses = Business.all
   
    businesses = params[:searchCity] ? businesses.where("city LIKE ?", "%" + params[:searchCity] + "%") : businesses

    businesses = bounds ? businesses.in_bounds(bounds) : businesses
    
    businesses = params[:minPricepoint] && params[:maxPricepoint] ? businesses.where(pricepoint: price_range) : businesses

    businesses = params[:searchQuery] ? businesses.where("name LIKE ? OR category LIKE ?", "%" + params[:searchQuery] + "%", "%" + params[:searchQuery] + "%") : businesses

    businesses = params[:filterCategory] == "All" ? businesses : businesses.where(category: params[:filterCategory])


    if params[:filterOpenNow] == "Yes"
      openhour = weekday + "open"
      closehour = weekday + "close" 
      currenthour = Time.now.hour
    
      # if params[:"#{openhour}"] < params[:"#{closehour}"]
      
      businesses = businesses.where("#{openhour} <= '#{currenthour}' and #{closehour} >= '#{currenthour}'")   
     
      # businesses = businesses.where("#{openhour} >= '?'", currenthour)      
    else
      businesses
    end

    businesses = params[:filterDelivery] == "Yes" ? businesses.where(delivery: params[:filterDelivery]) : businesses

    businesses = params[:filterTakeout] == "Yes" ? businesses.where(takeout: params[:filterTakeout]) : businesses

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


  def business_params
    params.require(:business).permit(:name, :category, :lat, :lng, :website, :phonenumber, :address1, :city, :state, :zipcode, :pricepoint, :monopen, :monclose, :tuesopen, :tuesclose, :wedopen, :wedclose, :thursopen, :thursclose, :friopen, :friclose, :satopen, :satclose, :sunopen, :sunclose, :delivery, :takeout, :vegetarian, :vegan, :takesreservation, :creditcard, :googlepay, :applepay, :parking, :wheelchair, :goodforkids, :goodforgroups, :outdoor, :wifi, :dogsallowed, :genderneutralrestroom, photos: [])
  end

  def bounds
    params[:bounds]
  end

  
end

     # businesses = businesses.where("'params[:#{openhour}] <= ?'", currenthour) #returns 'sunopen > 20'
      # businesses = businesses.where("'#{openhour}: params[:#{openhour}] <= ?'", 10) #returns 'sunopen > 20'
      # businesses = businesses.where("'#{openhour}: params[:#{openhour}] <= #{currenthour}'") #returns 'sunopen > 20'
    
