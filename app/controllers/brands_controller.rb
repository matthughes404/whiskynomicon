class BrandsController < ApplicationController
  def index
    brands = Brand.all
    render :json => brands
  end

  def create
    render :json => { name: params["name"] }
  end

  def show
    brand = Brand.new({ name: "Speyburn", created_at: DateTime.now, updated_at: DateTime.now })
    render :json => brand
  end

  def update
  end

  def destroy
  end
end
