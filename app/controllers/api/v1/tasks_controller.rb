class Api::V1::TasksController < ApplicationController
  respond_to :json

  def show
    respond_with Task.find(params[:id])
  end

  def index
    respond_with Task.all
  end

  def create
    task = Task.create(task_params)
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
      params.require(:task).permit(:title, :description, :lon, :lat, :user_id)
    end
end

