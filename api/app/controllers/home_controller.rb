class HomeController < ApplicationController
  def index
    render :json => { message: "Welcome to the Dram API!" }
  end
end
