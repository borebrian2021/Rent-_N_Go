class Reservation < ApplicationRecord
    belongs_to :space
    # belongs_to :property
    has_many :selected_amenities
    belongs_to :client
    has_one :payment

    validates :kickoff_date, presence: true
    validates :end_date, presence: true
    validates :total_cash, presence: true
end
