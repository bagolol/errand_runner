class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :open, :pick_up_lat, :pick_up_lon, :pick_up_address, :drop_off_lat, :drop_off_lon, :drop_off_address, :user_id
  has_one :user
end
