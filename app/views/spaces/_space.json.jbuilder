json.extract! space, :id, :client_id, :room_size, :image_1, :image_2, :image_3, :description, :price_per_hour, :status, :space_category, :created_at, :updated_at
json.url space_url(space, format: :json)
