Rails.application.routes.draw do
  root to: 'general#index'

  get "/*path", to: "general#index"
end

# Rails.application.routes.draw do
#   root to: 'home#index'

#   get "/*path", to: "home#index"
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# end
