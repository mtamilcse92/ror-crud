class UsersSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_no
end
