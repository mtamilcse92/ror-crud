class UserSerializer < ActiveModel::Serializer
  has_many :orders
  attributes :id, :first_name, :last_name, :email, :phone_no
end
