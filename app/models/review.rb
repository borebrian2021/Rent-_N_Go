class Review < ApplicationRecord
    belongs_to :space
    belongs_to :property
    belongs_to :client

    validates :ratings, length: {in: 1..5}
    validates :review, length: {maximum: 250}
end
