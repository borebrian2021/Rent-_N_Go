json.extract! selected_amenity, :id, :reservation_id, :amenity_id, :quality, :description, :created_at, :updated_at
json.url selected_amenity_url(selected_amenity, format: :json)
