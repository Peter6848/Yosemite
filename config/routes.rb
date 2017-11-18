Rails.application.routes.draw do
  root to: 'home#index'
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  get '/logout', to: 'sessions#destroy', as: :logout
  resources :trips
  get '/about', to: 'about#index'
  resources :user_trips
  resources :reservations
end
