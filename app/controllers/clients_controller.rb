class ClientsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
def show
  client= Client.find(params[:id])
  render json: client, status: :ok
end
#create a new client
def create
        client = Client.create(client_params);
        if client.valid?
            session[:client_id] = client.id;
            render json: client, status: :created
        else
            render json: { errors: client.errors.full_messages }, status: :unprocessable_entity
        end
    end

 private
    def client_params
        params.permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
    end
    def render_not_found_response
        render json: { error: "Client not found" }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
