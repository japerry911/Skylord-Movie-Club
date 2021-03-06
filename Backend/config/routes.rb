Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :movies, only: [:index, :show, :create]
  resources :genre, only: [:index]
  resources :reviews, only: [:create, :destroy]
  post '/login', to: 'sessions#login'
  get 'most-recent-reviews', to: 'reviews#most_recent_reviews'
  post '/contact-send-email', to: 'contact#send_email'
end
