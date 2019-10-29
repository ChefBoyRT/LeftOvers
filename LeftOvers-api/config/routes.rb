Rails.application.routes.draw do
  resources :wastes
  resources :foods
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
end