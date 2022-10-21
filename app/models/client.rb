class Client < ApplicationRecord
    #relationships 
    has_many :properties
    has_many :spaces, through: :properties 
    has_many :messages 
    has_many :reservations 
    has_secure_password
    #validations 
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqeness: true 
    validates :phone_number, presence: true, length: {maximum: 10}
    validates :password, presence: true, length: {minimum: 4}
    validates :password_confirmation, presence: true, length: {minimum: 4}
end
