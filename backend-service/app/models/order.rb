class Order < ApplicationRecord
    it { should belong_to(:users) } 
end
