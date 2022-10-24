class Message < ApplicationRecord
    #relationships 
    belongs_to :client
    #validations 
    validates :client_id, presence: true 
    validates :message, presence: true
end
