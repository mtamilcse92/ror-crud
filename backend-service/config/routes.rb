Rails.application.routes.draw do

  concern :api_v1 do
    resources :users
  end

  namespace :api do
    namespace :v1 do
      concerns :api_v1
    end
  end

end
