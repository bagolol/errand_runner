class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :open, :lat, :lon, :user_id
end