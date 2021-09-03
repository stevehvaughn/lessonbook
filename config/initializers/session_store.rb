if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_lessons-app', domain: 'lessons-app-json-api'
  else
    Rails.application.config.session_store :cookie_store, key: '_lessons-app'
  end