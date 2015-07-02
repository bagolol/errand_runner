require 'spec_helper'

describe Api::V1::TasksController, type: :controller do

  describe Api::V1::TasksController do
    describe "GET #show" do
      before(:each) do
        @task = FactoryGirl.create :task
        get :show, id: @task.id
      end

      it "returns the information about a task on a hash" do
        task_response = json_response
        expect(task_response[:title]).to eql @task.title
      end

      it { should respond_with 200 }
    end
  end
end
