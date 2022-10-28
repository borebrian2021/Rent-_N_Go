class SpaceSerializer < ActiveModel::Serializer
  attributes :id , :property_id, :room_size, :image_1 , :image_2, :image_3, :description, :price_per_hour, :status, :space_category, :client_id ,:created_at


  belongs_to :client
  belongs_to :property
  has_many :reservations
  has_many :reviews
  has_many :amenities

end
