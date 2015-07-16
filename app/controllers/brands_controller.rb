class BrandsController < ApplicationController
  def index
    brands = Brand.all
    render :json => brands
  end

  def create
    brand = Brand.new(brand_params)

    if brand.save
      render :json => brand, :status => :created
    else
      render :json => error_output(brand.errors), :status => :bad_request
    end
  end

  def show
    brand = Brand.new({ id: params[:id], name: "Speyburn", created_at: DateTime.now, updated_at: DateTime.now })
    render :json => brand
  end

  def update
    render :json => { id: params[:id], name: params["name"], updated_at: DateTime.now }
  end

  def destroy
    head :no_content
  end

  private
  def brand_params
    params.permit(:name)
  end
end
