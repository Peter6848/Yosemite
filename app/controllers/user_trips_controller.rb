class UserTripsController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user_trip = UserTrip.new(user_trip_params)
    if @user_trip.save
      redirect_to root_path
    else
      render ' '
    end
  end

  def user_trip_params
    params.require(:user_trip).permit(:user_id, :trip_id)
  end

end
