require 'spec_helper'

describe Task, type: :model do
  let(:task) { FactoryGirl.build :task }
  subject { task }

  it { should respond_to(:title) }
  it { should respond_to(:description) }
  it { should respond_to(:open) }
  it { should respond_to(:pick_up_lat) }
  it { should respond_to(:pick_up_lon) }
  it { should respond_to(:pick_up_address) }
  it { should respond_to(:drop_off_lat) }
  it { should respond_to(:drop_off_lon) }
  it { should respond_to(:drop_off_address) }

  it { should respond_to(:user_id) }

  it { should validate_presence_of :title }
  it { should validate_presence_of :description }
  it { should validate_presence_of :pick_up_lon }
  it { should validate_presence_of :pick_up_lat }
  it { should validate_presence_of :pick_up_address }
  it { should validate_presence_of :drop_off_lat}
  it { should validate_presence_of :drop_off_lon }
  it { should validate_presence_of :drop_off_address }

  it { should belong_to :user }

end
