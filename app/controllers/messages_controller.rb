class MessagesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        message = Message.all
        render json: message
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
 
  
  const handleSubmit = (e) => {
   
    fetch("/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: contact.firstName,
        last_name: contact.lastName,
        email: contact.email,
        message: contact.message
        
      }),
    })
      .then((r) => r.json())
      .then((contact) => {
        setContact({
          ...contact,
          first_name: "",
          last_name: "",
          email: "",
          message: ""
          
        });
      
      
        

      } )     