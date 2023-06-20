Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'users/create'
      get 'users/index'
      put 'users/update'
      delete 'users/destroy'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:create, :index, :update, :destroy]
end
