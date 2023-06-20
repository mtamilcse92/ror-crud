class User < ApplicationRecord
    has_many :orders, class_name: "Order", foreign_key: "id"
end
