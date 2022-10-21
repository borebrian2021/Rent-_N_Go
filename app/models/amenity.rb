class Amenity < ApplicationRecord
    belongs_to :space

    # should we delete all the selected amenities onces an amenity is selected
    # has_many :selected_amenities , dependent: :destroy
    has_many :selected_amenities

    validates :space_id, presence: true;
    validates :item_name, presence: true
    validates :price, presence: true;
end
