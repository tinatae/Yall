Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show, :create] 
    resources :reviews, only: [:create, :show, :destroy]
  end

  root to: 'static_pages#root'
  
end
  

# Prefix Verb   URI Pattern                                                                              Controller#Action
#                  api_user POST   /api/user(.:format)                                                                      api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#            api_businesses GET    /api/businesses(.:format)                                                                api/businesses#index {:format=>:json}
#                           POST   /api/businesses(.:format)                                                                api/businesses#create {:format=>:json}
#              api_business GET    /api/businesses/:id(.:format)                                                            api/businesses#show {:format=>:json}
#               api_reviews POST   /api/reviews(.:format)                                                                   api/reviews#create {:format=>:json}
#                api_review GET    /api/reviews/:id(.:format)                                                               api/reviews#show {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
    #  rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create