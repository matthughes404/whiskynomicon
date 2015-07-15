class BrandsController < ApplicationController
  def index
    brands = Brand.all
    render :json => brands
  end

  def create
    render :json => Brand.new({ id: 1, name: params["name"], created_at: DateTime.now, updated_at: DateTime.now })
  end

  def show
    brand = Brand.new({ id: params[:id], name: "Speyburn", created_at: DateTime.now, updated_at: DateTime.now })
    render :json => brand
  end

  def update
    render :json => { id: params[:id], name: params["name"], updated_at: DateTime.now }
  end

  def destroy
    render :json => {}
  end
end
