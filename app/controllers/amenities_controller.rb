class AmenitiesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


  def index
      res = Amenity.all
      render json: res;
  end

  def create
      res = Amenity.create!(amenities_params)
      render json: res, status: :created
  end

  def destroy
      res = find
      res.destroy
      render json: {}
      # head :no_content
  end

  def update
      res = find
      res.update(amenities_params)
      render json: res
  end

  def show
      res = find
      render json: res
  end

  private

  def find
      Amenity.find(params[:id])
  end

  def amenities_params
    params.permit(:space_id, :item_name, :price)
  end

  def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
      render json: { error: "Record not found" }, status: :not_found
  end
end

