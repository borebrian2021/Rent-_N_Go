class Property < ApplicationRecord
    belongs_to :client
    has_many :spaces
    has_many :reservations, through: :spaces

    validates :property_name, presence: true
    validates :location, presence: true
    validates :image_url, presence: true
end
