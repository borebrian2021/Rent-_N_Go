class PropertiesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def index
        properties = Property.all
        render json :properties
    end

    def show
        property = Property.find(params[:id])
        render json: :property
    end

    private
    def render_not_found
        render json: {error: 'Property not found'}, status: :not_found
    end
end
