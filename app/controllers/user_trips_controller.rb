class UserTripsController < ApplicationController

  def index
    @users = User.all
    @user_trip = UserTrip.new
  end

  def create
    @user_trip = UserTrip.new(user_trip_params)
    if @user_trip.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit

  end

  def destroy

  end

  def user_trip_params
    params.require(:user_trip).permit(:user_id, :trip_id)
  end

end
