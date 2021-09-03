Rails.application.routes.draw do
  resources :users
  resources :comments
  resources :lessons
  resources :practice_logs

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
