Rails.application.routes.draw do
  root to: 'home#index'
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  get '/logout', to: 'sessions#destroy', as: :logout
end
