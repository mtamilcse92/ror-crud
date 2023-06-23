class Order < ApplicationRecord
  belongs_to :user
  belongs_to :product
  belongs_to :variant
  def self.search(query)
    if query.blank?
        all
    else
        where(user: query).all
    end
end
end
