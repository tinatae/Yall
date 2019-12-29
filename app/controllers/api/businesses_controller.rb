class Api::BusinessesController < ApplicationController
  before_action :require_login, only: [:create]
  
  def index
   if params[:searchQuery]
      businesses = Business.where("name LIKE ?", "%" + params[:searchQuery] + "%").or(Business.where("category LIKE ?", "%" + params[:searchQuery] + "%" ))
   end

    businesses = bounds ? businesses.in_bounds(bounds) : businesses
    # businesses = bounds ? Business.in_bounds(bounds) : Business.all

    if params[:minPricepoint] && params[:maxPricepoint]
      businesses = businesses.where(pricepoint: price_range)
    end

    # @category = params[:filterCategory]
    # businesses = businesses.categorized(@category)

    if params[:filterCategory] == "All"
      businesses = businesses
    else
      businesses = businesses.where(category: params[:filterCategory]) 
    end
# ------
    # @average_rating = params[:average_rating]
    # businesses = businesses.rated(@average_rating)

    if params[:filterRating]
      businesses.order('average_rating desc')
    end
  # ------
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

  def business_params
    params.require(:business).permit(:name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2, :pricepoint, :monopen, :monclose, :monopenend, :moncloseend, :tuesopen, :tuesclose, :tuesopenend, :tuescloseend, :wedopen, :wedclose, :wedopenend, :wedcloseend, :thursopen, :thursclose, :thursopenend, :thurscloseend, :friopen, :friclose, :friopenend, :fricloseend, :satopen, :satclose, :satopenend, :satcloseend, :sunopen, :sunclose, :sunopenend, :suncloseend, :delivery, :takeout, photos: [])
  end

  def bounds
    params[:bounds]
  end
end

#  id          :bigint           not null, primary key
#  name        :string           not null
#  category    :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  website     :string
#  phonenumber :string
#  pricepoint  :integer          not null
#  address1    :string           not null
#  address2    :string           not null


    # if params[:searchQuery] != ""
    #   # @name = params[:searchQuery]
    #   # businesses = Business.named(@name)
    # end

    # businesses = Business.all.where("name like ?", name)
    
