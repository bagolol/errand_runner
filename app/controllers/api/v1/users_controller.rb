class Api::V1::UsersController < ApplicationController
  before_action :authenticate_with_token!, only: [:update, :destroy]
  respond_to :json


  def tasks
    user = User.find(params[:id])
    respond_with user.tasks
  end

  def show
    respond_with User.find(params[:id])
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 201, location: [:api, user]
    else
      render json: { errors: user.errors }, status: 422
    end
  end

   def update
    user = current_user

    if user.update(user_params)
      render json: user, status: 200, location: [:api, user]
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def destroy
    current_user.destroy
    head 204
  end

  def inbox
    respond_with current_user.received_messages
  end

  def outbox
    respond_with current_user.sent_messages
  end

  def show_messages
    respond_with current_user.messages.find(params[:id])
  end

  def destroy_message
    message = current_user.messages.find(params[:id])
    if message.destroy
      flash[:notice] = "All ok"
    else
      flash[:error] = "Fail"
    end
  end

  def new_message
    message = ActsAsMessageable::Message.new
  end

  def send_message
    to = User.find_by_email(params[:user][:to])
    message = current_user.send_message(to, params[:user][:topic], params[:user][:body])
   Pusher['test'].trigger('my_event', {
      message: message
    })
    render json: message, status: 200

  end


  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :username, :last_name, :first_name)
    end
end