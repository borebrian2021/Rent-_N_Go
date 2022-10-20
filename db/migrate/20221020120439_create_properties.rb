class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.integer :client_id
      t.string :property_name
      t.string :location
      t.string :image_url

      t.timestamps
    end
  end
end
