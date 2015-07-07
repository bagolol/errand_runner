class AddAdressToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :pick_up_address, :string
    add_column :tasks, :drop_off_address, :string
    add_column :tasks, :drop_off_lat, :decimal
    add_column :tasks, :drop_off_lon, :decimal
  end
end
