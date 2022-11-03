class ContactsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        contact = Contact.all
        render json: contact
    end

    def create
        contact = Contact.create(contact_params)
        render json: contact, status: :created
    end

    def show
        contact = Contact.find(params[:id])
        render json: contact, status: :ok
    end

    private
    def contact_params
        params.permit(:first_name, :last_name, :email, :message)
    end

    def render_not_found_response
        render json: { error: "Contact not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
