Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show, :create] 
    resources :reviews, only: [:create]
  end

  root to: 'static_pages#root'
  
end
  

  #  Prefix Verb   URI Pattern                                                  Controller#Action
  #                api_user POST   /api/user(.:format)                          api/users#create {:format=>:json}
  #             api_session DELETE /api/session(.:format)                       api/sessions#destroy {:format=>:json}
  #                         POST   /api/session(.:format)                       api/sessions#create {:format=>:json}
  #          api_businesses GET    /api/businesses(.:format)                    api/businesses#index {:format=>:json}
  #                         POST   /api/businesses(.:format)                    api/businesses#create {:format=>:json}
  #            api_business GET    /api/businesses/:id(.:format)                api/businesses#show {:format=>:json}
  #             api_reviews POST   /api/reviews(.:format)                       api/reviews#create {:format=>:json}
  #                    root GET    /                                            static_pages#root
     