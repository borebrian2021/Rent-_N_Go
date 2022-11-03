require "stripe"

class ChargesController < ApplicationController
    skip_before_action :authorize, only: :create

  def create
    Stripe.api_key = ENV['STRIPE_SECRET_KEY']

    payment_intent = Stripe::PaymentIntent.create(
      amount: params[:amount],
      currency: params[:charge][:currency],
      automatic_payment_methods: {
        enabled: true,
      },
      receipt_email: params[:charge][:email],
      billing: {
        name: params[:charge][:name],
        address: {
          city: params[:charge][:address][:city],
          country: params[:charge][:address][:country],
          zip: params[:charge][:address][:zip],
          phone_number: params[:charge][:address][:phone_number],
          postal_code: params[:charge][:address][:postal_code],
          state: params[:charge][:address][:state],
        },
      },
    )
    puts payment_intent
    render json: {
      clientSecret: payment_intent["client_secret"],
    }
end
end