class VariantsController < ApplicationController
  def index
    variants = Variant.where(brand_id: params[:brand_id])
    render :json => variants
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end
end
