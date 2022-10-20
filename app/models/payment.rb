class Payment < ApplicationRecord
    belongs_to :reservation
    #validations 
    validates :reservation_id, presence: true 
    validates :payment_method, presence: true
    validates :total, presence: true 
    validates :status, presence: true, inclusion: {in: %w(paid unpaid), message: "invalid payment status"}
end
