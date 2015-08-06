class ActivityController < ApplicationController
  before_action :authenticate_user!

  def index
    render :json => Activity.where({ user_id: user_id })
  end

  def update
    activity = Activity.where({ user_id: user_id, id: params[:id] }).take
    render :json => activity
  end

  def destroy
    head :no_content
  end
end
