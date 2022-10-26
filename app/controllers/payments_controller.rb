class PaymentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        payment = Payment.all
        render json: payment, status: :ok
    end

    def create
        payment = Payment.create!(payment_params)
        render json: payment, status: :created
    end

    def show
        payment = Payment.find(params[:id])
        render json: payment, status: :ok
    end
    
    private
    def payment_params
        params.permit(:reservation_id, :payment_method, :total, :status)
    end

    def render_not_found_response
        render json: { error: "Payment not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
