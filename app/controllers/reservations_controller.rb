class ReservationsController < ApplicationController

  def index
    
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = current_user.reservations.build(reservation_params)
    if @reservation.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit

  end

  def destroy

  end

  def reservation_params
    params.require(:reservation).permit(:user_id, :trip_id)
  end

end
