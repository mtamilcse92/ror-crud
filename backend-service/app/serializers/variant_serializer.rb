class VariantSerializer < ActiveModel::Serializer
  belongs_to :product
  attributes :id, :name, :description, :img_url, :price
end
