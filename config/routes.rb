Rails.application.routes.draw do
  resources :users
  resources :comments
  resources :lessons
  resources :practice_logs

  get '/teachers', to: 'users#teachers'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "/me", to: "users#show"
end
