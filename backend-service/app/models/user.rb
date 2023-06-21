class User < ApplicationRecord
    has_many :orders

    def self.search(query)
        if query.blank?
            all
        else
            @parmameter = query.downcase
            where('lower(first_name) LIKE :search', search:"%#{@parmameter}%")
        end
    end
end
