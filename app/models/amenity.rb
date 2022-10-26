class Amenity < ApplicationRecord
    belongs_to :space
    has_many :selected_amenities

    validates :space_id, presence: true;
    validates :item_name, presence: true
    validates :price, presence: true;
end
