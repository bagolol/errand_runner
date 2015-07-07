class Task < ActiveRecord::Base
  validates :title, :user_id, :description, :pick_up_lon, :pick_up_lat, :pick_up_address, :drop_off_lat, :drop_off_lon, :drop_off_address, presence: true

  belongs_to :user
end
