class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def index
        reviews = Review.all
        render json :reviews
    end

    def show
        review = Review.find(params[:id])
        render json: :review
    end

    def create
       review = Review.create(review_params)
       render json :review, status: :created 
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private
    def render_not_found
        render json: {error: 'Review not found'}, status: :not_found
    end

    def review_params
        params.permit(:ratings, :review_by, :review, :space_id, :client_id)
    end
end
