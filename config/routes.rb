require 'api_constraints'


Rails.application.routes.draw do
  devise_for :users
  # Api definition
  namespace :api, defaults: { format: :json }, path: '/'  do
    scope module: :v1,
              constraints: ApiConstraints.new(version: 1, default: true) do
          resources :users, :only => [:show, :create, :update, :destroy] do
            resources :tasks, :only => [:create, :update, :destroy, :show]
          end
          resources :sessions, :only => [:create, :destroy]
          resources :tasks, :only => [:show, :index]
    end
  end
end