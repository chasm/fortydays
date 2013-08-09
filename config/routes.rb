Fortydays::Application.routes.draw do
  get '/:code' => "site#index"
  
  root 'site#index'
end
