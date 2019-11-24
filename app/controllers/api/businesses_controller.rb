class Api::BusinessesController < ApplicationController
  before_action :require_login, only: [:create]
  
  def index
    businesses = bounds ? Business.in_bounds(bounds) : Business.all
 
    # if params[:searchCategory]
    #   businesses = businesses.where(category: search_category)
    # end

    @businesses = businesses.includes(:reviews)
    render :index
  end

  def create
    @business = Business.create!(business_params)
    render :show
  end

  def show
    @business = Business.find(params[:id])
  end

  private

  def search_category
      params[:searchCategory] == "Bars"
  end

  def business_params
    params.require(:business).permit(:name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2)
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
#  address1    :string           not null
#  address2    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null