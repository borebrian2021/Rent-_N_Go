class CreateSelectedAmenities < ActiveRecord::Migration[7.0]
  def change
    create_table :selected_amenities do |t|
      t.string :reservation_id
      t.integer :amenity_id
      t.integer :quality
      t.string :description

      t.timestamps
    end
  end
end
