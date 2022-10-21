class Property < ApplicationRecord
    belongs_to :client
    has_many :spaces
    has_many :reservations, through: :spaces
end
