Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users do
    resources :categories do
      resources :items
    end
  end
end
