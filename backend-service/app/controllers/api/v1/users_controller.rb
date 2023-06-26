class Api::V1::UsersController < ApplicationController

  #POST /users
  def create
    @user = User.new(user_payload)
    if @user.valid?
      if @user.save
      render json: @user, status: 201
      else
        render json: { message: 'User not saved' }, state: 500
      end
    else
      render json: { message: 'Bad request' }, state: 400
    end
  end

  #GET /users
  def index
    @users = User.search(params[:search])
    render json: @users
  end

  #GET /users/:id
  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  #PUT /users/:id
  def update
    @user = User.find(params[:id])
    if @user
      @user.update(user_payload)
      render json: @user, status: 200
    else
      render json: { message: 'User not updated' }, state: 500
    end
  end

  #DELETE /users/:id
  def destroy
    @user = User.find(params[:id])
    if @user
      @user.destroy
      render json: { message: 'User successfully deleted'}, status: 200
    else
      render json: { message: 'User not deleted' }, state: 500
    end
  end

  private

  def user_payload
    params.require(:user).permit(:first_name, :last_name, :email, :phone_no)
  end

end
