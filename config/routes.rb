Rails.application.routes.draw do
  resources :selected_amenities
  resources :amenities
  resources :spaces
  resources :payments, only: [:index, :create, :show]
  resources :messages, only: [:index, :show, :create]
  resources :clients, only: [:create, :show]
  post "/login", to: "sessions#create"
  get "/me", to: "clients#show"
  delete "/logout", to: "sessions#destroy"
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :reviews, only: [:index]
  resources :reservations, only: [:index]
  resources :properties, only: [:index, :show, :create, :destroy]
end
