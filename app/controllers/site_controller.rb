class SiteController < ApplicationController
  def index
    @partial = params[:code]
    
    puts ">> Received code: " + (@partial || "nothing")
    
    if @partial
      puts ">> Found @partial (" + @partial + ")"
      if request.xhr?
        puts ">> It's an AJAX request!"
        puts ">> Rendering partials/#{@partial}"
        render :partial => "partials/#{@partial}"
      end
    end
  end
end
