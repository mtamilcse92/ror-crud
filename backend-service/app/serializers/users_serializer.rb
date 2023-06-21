class UsersSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :last_name, :email, :phone_no
  def firstName
    first_name(object)
  end
end
