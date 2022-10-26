class MessagesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        message = Message.all.count
        render json: {count_messages: message}
    end

    def create
        message = Message.create(message_params)
        render json: message, status: :created
    end

    def show
        message = Message.find(params[:id])
        render json: message, status: :ok
    end

    private
    def message_params
        params.permit(:client_id, :message)
    end

    def render_not_found_response
        render json: { error: "Message not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
