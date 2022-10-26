class CreateAmenities < ActiveRecord::Migration[7.0]
  def change
    create_table :amenities do |t|
      t.integer :space_id
      t.string :item_name
      t.integer :price

      t.timestamps
    end
  end
end
