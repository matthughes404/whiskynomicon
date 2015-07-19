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
    brand = Brand.find_by_id(params[:id])

    if brand
      render :json => brand
    else
      render :json => not_found, :status => :not_found
    end
  end

  def update
    brand = Brand.find_by_id(params[:id])
    if brand
      brand.name = params[:name]
      brand.save
      render :json => brand
    else
      render :json => not_found, :status => :not_found
    end
  end

  def destroy
    brand = Brand.find_by_id(params[:id])
    if brand
      brand.delete
      head :no_content
    else
      render :json => not_found, :status => :not_found
    end
  end

  private
  def brand_params
    params.permit(:name)
  end
end
