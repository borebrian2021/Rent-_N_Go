class SpacesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


  def index
      res = Space.all
      render json: res;
  end
  

  def create
      res = Space.create!(spaces_params)
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
      res.update(spaces_params)
      render json: res
  end

  def show
      res = find
      render json: res
  end

  private

  def find
      Space.find(params[:id])
  end

  def spaces_params
      params.permit(:property_id, :room_size, :image_1, :image_2, :image_3, :description, :price_per_hour, :status, :space_category, :client_id)
  end

  def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
      render json: { error: "Record not found" }, status: :not_found
  end
end
