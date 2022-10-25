class ReservationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        reservations = Reservation.all
        render json: reservations
    end

    def show
        reservation = Reservation.find(params[:id])
        render json: reservation
    end

    def create
       reservation = Reservation.create!(reservation_params)
       render json: reservation, status: :created 
    end

    def update
        reservation = Reservation.find(params[:id])
        reservation.update!(reservation_params)
        render json: reservation
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        head :no_content
    end

    private
    def render_not_found
        render json: {error: 'Reservation not found'}, status: :not_found
    end

    def reservation_params
        params.permit(:space_id, :kickoff_date, :end_date, :total_cash, :client_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
