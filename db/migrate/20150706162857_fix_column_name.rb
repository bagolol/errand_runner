class FixColumnName < ActiveRecord::Migration
  def change
    change_table :tasks do |t|
      t.rename :lat, :pick_up_lat
      t.rename :lon, :pick_up_lon
  end
end
end
