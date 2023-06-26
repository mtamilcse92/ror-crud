class User < ApplicationRecord
    has_many :orders

    validates :first_name, :presence => true
    validates :last_name, :presence => true
    validates :email, :presence => true
    validates :phone_no, :presence => true

    def self.search(query)
        if query.blank?
            all
        else
            @parmameter = query.downcase
            where('lower(first_name) LIKE :search', search:"%#{@parmameter}%")
        end
    end

end
