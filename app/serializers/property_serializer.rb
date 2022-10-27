class PropertySerializer < ActiveModel::Serializer
  attributes :id, :property_name, :location , :image_url

  belongs_to :client
  has_many :spaces
  has_many :reservations, through: :spaces
end
