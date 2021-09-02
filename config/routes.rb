Rails.application.routes.draw do
  resources :comments
  resources :lessons
  resources :practice_logs
  resources :users
end
