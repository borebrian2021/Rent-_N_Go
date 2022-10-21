Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :reviews, only: [:index]
  resources :reservations, only: [:index]
  resources :properties, only: [:index]
end
