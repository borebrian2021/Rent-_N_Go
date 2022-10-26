class ClientSerializer < ActiveModel::Serializer
  attributes :id , :first_name, :last_name, :email, :phone_number, :password_digest, :profile_url

  has_many :properties 
  has_many :spaces , through: :properties
  has_many :messages 
  has_many :reservations

end

