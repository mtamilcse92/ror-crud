class ProductSerializer < ActiveModel::Serializer
  has_many :variants
  attributes :id, :name, :description, :img_url
end
