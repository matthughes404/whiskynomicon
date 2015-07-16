class VariantsController < ApplicationController
  def index
    variants = Variant.where(brand_id: params[:brand_id])
    render :json => variants
  end

  def create
    render :json =>
      Variant.new({
        id: 999,
        brand_id: params[:brand_id],
        name: params["name"],
        style: params["style"],
        proof: params["proof"],
        created_at: DateTime.now,
        updated_at: DateTime.now
      }), :status => :created
  end

  def show
    variant = Variant.where({ brand_id: params[:brand_id], id: params[:id] })
    render :json => variant
  end

  def update
    render :json => { id: params[:id], brand_id: params[:brand_id],
      name: params["name"], style: params["style"], proof: params["proof"], updated_at: DateTime.now }
  end

  def destroy
    head :no_content
  end
end
