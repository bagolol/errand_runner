class ChangeDefaultValueToTasks < ActiveRecord::Migration
  def change
    change_column_default(:tasks, :open, true)
  end
end
