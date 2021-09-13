Rails.application.routes.draw do
  resources :users
  resources :comments
  resources :lessons
  resources :practice_logs

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get "/me", to: "users#show"
  get '/teachers', to: 'users#teachers'
  get '/users-students', to: 'users#users_students'
end
