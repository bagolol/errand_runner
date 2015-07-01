class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.integer :lat
      t.integer :lon
      t.string :description
      t.boolean :open

      t.timestamps null: false
    end
  end
end
