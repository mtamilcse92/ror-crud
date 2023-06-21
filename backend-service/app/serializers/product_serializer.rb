class ProductSerializer < ActiveModel::Serializer
  has_many :variants
  has_many :orders
  attributes :id, :name, :description, :img_url
end
