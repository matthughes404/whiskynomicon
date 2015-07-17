Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  root 'home#index'

  actions = [:index, :create, :show, :update, :destroy]

  resources :brands, :only => actions do
    resources :variants, :only => actions
  end

  resources :tastes, :only => actions

  resources :bottles, :only => actions
end
