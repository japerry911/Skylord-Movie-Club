Rails.application.routes.draw do
  resources :users, only: [:create]
  post '/login', to: 'sessions#login'
  get 'most-recent-reviews', to: 'reviews#most_recent_reviews'
end
