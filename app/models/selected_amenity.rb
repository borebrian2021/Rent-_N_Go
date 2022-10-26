class SelectedAmenity < ApplicationRecord
    belongs_to :amenity
    belongs_to :reservation

    validates :reservation_id, presence: true;
    validates :amenity_id, presence: true
    validates :quality, presence: true;
    validates :description, presence: true;

end
