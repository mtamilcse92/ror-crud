class OrderSerializer < ActiveModel::Serializer
  belongs_to :product
  belongs_to :variant
  belongs_to :user

  attributes :id, :status, :comment,:order_code, :created_at
end
