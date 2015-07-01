class Task < ActiveRecord::Base
  validates :title, :user_id, :lon, :lat, :description, presence: true

  belongs_to :user
end
