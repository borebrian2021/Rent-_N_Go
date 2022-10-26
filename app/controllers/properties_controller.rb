class PropertiesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_render
    def index
        properties = Property.all
        render json: properties
    end

    def show
        property = Property.find(params[:id])
        render json: property
    end

    def create
       property = Property.create(property_params)
       render json: property, status: :created 
    end

    def update
        property = Property.find(params[:id])
        property.update!(property_params)
        render json: property
    end

    def destroy
        property = Property.find(params[:id])
        property.destroy
        head :no_content
    end

    private
    def render_not_found
        render json: {error: 'Property not found'}, status: :not_found
    end

    def property_params
        params.permit(:client_id , :property_name, :location, :image_url)
    end

    def render_unprocessable_entity_response(invalid)
        # render json: { errors: invalid.record.errors }, status: :unprocessable_entity
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
