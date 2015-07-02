class Api::V1::TasksController < ApplicationController
  respond_to :json

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

  private

    def task_params
      params.require(:task).permit(:title, :description, :lon, :lat)
    end
end

