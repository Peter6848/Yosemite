class UsersController < ApplicationController

  def index

  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      flash[:success] = "Welcome #{@user.first_name}"
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit

  end

  def delete

  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
    end

end
