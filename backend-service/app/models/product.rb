class Product < ApplicationRecord
    has_many :variants
    has_many :orders
    
    accepts_nested_attributes_for :variants
end
