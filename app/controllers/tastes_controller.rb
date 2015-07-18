class TastesController < ApplicationController
  before_action :authenticate_user!

  def index
    render :json => Taste.where({ user_id: user_id })
  end

  def create
    taste = Taste.new(taste_params)
    taste.user_id = user_id

    if taste.save
      render :json => taste, :status => :created
    else
      render :json => error_output(taste.errors), :status => :bad_request
    end
  end

  def show
    taste = Taste.where({ user_id: user_id, id: params[:id] }).take

    if taste
      render :json => taste
    else
      render :json => not_found, :status => :not_found
    end
  end

  def update
    taste = Taste.where({ user_id: user_id, id: params[:id] }).take

    if taste
      taste.brand = params[:brand] unless params[:brand].nil?
      taste.variant = params[:variant] unless params[:variant].nil?
      taste.style = params[:style] unless params[:style].nil?
      taste.proof = params[:proof] unless params[:proof].nil?
      taste.date = params[:date] unless params[:date].nil?
      taste.location = params[:location] unless params[:location].nil?
      taste.rating = params[:rating] unless params[:rating].nil?
      taste.review = params[:review] unless params[:review].nil?

      taste.save
      render :json => taste
    else
      render :json => not_found, :status => :not_found
    end
  end

  def destroy
    taste = Taste.where({ user_id: user_id, id: params[:id] }).take

    if taste
      taste.delete
      head :no_content
    else
      render :json => not_found, :status => :not_found
    end
  end

  private
  def taste_params
    params.permit([:brand, :variant, :style, :proof, :date, :location, :rating, :review])
  end

  def user_id
    current_user.id
  end
end
