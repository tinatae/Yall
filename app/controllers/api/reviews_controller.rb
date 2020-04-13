class Api::ReviewsController < ApplicationController
  before_action :require_login

  def create
    @review = current_user.reviews.new(review_params)
    # @review = Review.new(review_params)
    # @review.author_id = current_user.id
    # @review.business_id = params[:business_id]

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find(params[:id])
    if @review
      render :show
    else
      render json: @review.errors.full_messages, status:422
    end
  end


  def destroy
    @review = Review.find(params[:id])
    if @review.author_id == current_user.id
      @review.destroy!
      render :show
    else
      render json: ["Sorry, you can't delete someone else's review!"], status: 401 
    end
  end

  private
  def review_params
      params.require(:review).permit(:body, :rating, :business_id, :author_id, :created_at)
  end
end

