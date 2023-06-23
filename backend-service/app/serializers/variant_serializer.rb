class VariantSerializer < ActiveModel::Serializer
  belongs_to :product
  has_many :orders
  attributes :id, :name, :description, :img_url, :price, :product_id
end
