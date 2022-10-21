class Review < ApplicationRecord
    belongs_to :space
    belongs_to :property
    belongs_to :client
end
