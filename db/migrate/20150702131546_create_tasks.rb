class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.integer :lon
      t.integer :lat
      t.boolean :open
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
