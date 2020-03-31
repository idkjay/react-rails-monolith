Rails.application.routes.draw do
  root 'static_pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/cereals', to: 'static_pages#index'
  get '/cereals/:id', to: 'static_pages#index'

  namespace :api do 
    resource :cereals, only: [:show]
  end
end
