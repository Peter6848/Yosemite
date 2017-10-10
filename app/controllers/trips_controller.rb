class TripsController < ApplicationController

  def index
    @trip = Trip.find_by_id(params[:user_id])
    @trip = Trip.new
  end

  def new
    @trip = Trip.new
    @user_trips = UserTrip.all
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      redirect_to root_path
    else
      flash[:error] = "Unsuccessful in adding trip"
      render 'index'
    end
  end

  def edit

  end

  def destroy

  end

  private

  def trip_params
    params.require(:trip).permit(:date, :length, :guests)
  end

end
