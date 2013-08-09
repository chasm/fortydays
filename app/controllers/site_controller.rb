class SiteController < ApplicationController
  def index
    @partial = params[:code]
    
    if @partial
      if request.xhr?
        render :partial => "partials/#{params[:code]}"
      end
    end
  end
end
