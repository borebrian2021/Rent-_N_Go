class Space < ApplicationRecord
    belongs_to :client
    belongs_to :property
    has_many :reservations
    has_many :reviews
    has_many :amenities

    validates :property_id, presence: true;
    validates :room_size, presence: true
    validates :image_1, presence: true;
    validates :image_2, presence: true;
    validates :image_3, presence: true;
    validates :description, presence: true;
    validates :price_per_hour, presence: true;
    validates :status, presence: true;
    validates :space_category, inclusion: {in:["big", "small"]} 

end
