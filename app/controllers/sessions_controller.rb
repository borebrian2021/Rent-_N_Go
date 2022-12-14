class SessionsController < ApplicationController
  #loggin action
    def create
        client = Client.find_by(email: params[:email])
        if client&.authenticate(params[:password])
          session[:client_id] = client.id
          render json: client, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
      end
      #logout action
def destroy
  session.delete :client_id
  head :no_content
end
end
