class SelectedAmenity < ApplicationRecord
    belongs_to :amenity
    has_many :reservations

    validates :reservation_id, presence: true;
    validates :amenity_id, presence: true
    validates :quality, presence: true;
    validates :description, presence: true;

end
