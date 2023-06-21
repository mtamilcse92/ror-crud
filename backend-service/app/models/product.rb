class Product < ApplicationRecord
    has_many :variants
    has_many :orders
end
