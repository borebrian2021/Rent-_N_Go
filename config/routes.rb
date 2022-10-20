Rails.application.routes.draw do
  resources :selected_amenities
  resources :amenities
  resources :spaces
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
