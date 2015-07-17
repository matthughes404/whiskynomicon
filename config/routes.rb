Rails.application.routes.draw do
  root 'home#index'

  mount_devise_token_auth_for 'User', at: 'auth'

  actions = [:index, :create, :show, :update, :destroy]

  resources :brands, :only => actions do
    resources :variants, :only => actions
  end

  resources :tastes, :only => actions

  resources :bottles, :only => actions
end
