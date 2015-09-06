class HomeController < ApplicationController
  def index
    render :json => { message: "Welcome to the whiskynomicon API!" }
  end
end
