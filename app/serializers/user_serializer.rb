class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :email, :created_at, :updated_at, :auth_token, :lat, :lon, :username, :first_name, :last_name

  has_many :tasks
end
