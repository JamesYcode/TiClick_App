Rails.application.routes.draw do
  resources :users do
    resources :categories do
      resources :items
    end
  end
end
