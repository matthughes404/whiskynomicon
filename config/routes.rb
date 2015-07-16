Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  root 'home#index'

  resources :brands, :only => [:index, :create, :show, :update, :destroy] do
    resources :variants, :only => [:index, :create, :show, :update, :destroy]
  end
  
end
