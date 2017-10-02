class SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by(email: params[:email])
    if @user.try(:authenticate, params[:password])
      log_in(@user)
      redirect_to root_path
    else
      flash[:error] = "Login failed.  Email or password are incorrect"
      render new_session_path
    end
  end

  def delete

  end

end
