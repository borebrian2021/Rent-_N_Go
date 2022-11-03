Rails.application.routes.draw do
  resources :selected_amenities
  resources :amenities
  resources :spaces
  resources :payments, only: [:index, :create, :show]
  resources :messages, only: [:index, :show, :create]
  resources :clients, only: [:create, :show , :index]
  post "/login", to: "sessions#create"
  # get "/get_client", to: "clients#get_client"
  get "/me", to: "clients#show"
  delete "/logout", to: "sessions#destroy"

  post "/payment", to: "charges#create"
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  resources :reviews
  resources :reservations
  resources :properties
end
