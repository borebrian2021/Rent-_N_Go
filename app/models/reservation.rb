class Reservation < ApplicationRecord
    belongs_to :space
    belongs_to :property
    has_many :selected_amenities
    belongs_to :client
    has_one :payment
end
