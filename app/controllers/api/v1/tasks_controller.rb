class Api::V1::TasksController < ApplicationController
  respond_to :json
  before_action :authenticate_with_token!, only: [:update, :destroy]

  def show
    respond_with Task.find(params[:id])
  end

  def index
    respond_with Task.all
  end

  def create
    task = current_user.tasks.build(task_params)
    if task.save
      render json: task, status: 201, location: [:api, task]
    else
      render json: { errors: task.errors }, status: 422
    end
  end

  def update
    task = current_user.tasks.find(params[:id])
    if task.update(task_params)
      render json: task, status: 200, location: [:api, task]
    else
      render json: { errors: task.errors }, status: 422
    end
  end

  def destroy
    task = current_user.tasks.find(params[:id])
    task.destroy
    head 204
  end

  private

    def task_params
      params.require(:task).permit(:title, :description, :pick_up_lon, :pick_up_lat, :pick_up_address, :drop_off_lat, :drop_off_lon, :drop_off_address, :user_id)
    end
end
