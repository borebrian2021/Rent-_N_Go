class SessionsController < ApplicationController
  def create
        client = Client.find_by(email: params[:email])
        if client&.authenticate(params[:password])
          session[:client_id] = client.id
          render json: client, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
      end
   
end
