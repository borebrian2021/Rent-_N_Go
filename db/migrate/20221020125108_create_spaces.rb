class CreateSpaces < ActiveRecord::Migration[7.0]
  def change
    create_table :spaces do |t|
      t.integer :client_id
      t.string :room_size
      t.string :image_1
      t.string :image_2
      t.string :image_3
      t.string :description
      t.integer :price_per_hour
      t.string :status
      t.string :space_category

      t.timestamps
    end
  end
end
