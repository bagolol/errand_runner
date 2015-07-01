require 'spec_helper'

describe Task do
  let(:task) { FactoryGirl.build :task }
  subject { task }

  it { should respond_to(:title) }
  it { should respond_to(:lat) }
  it { should respond_to(:lon) }
  it { should respond_to(:open) }
  it { should respond_to(:description) }

end