class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :space_id, null: false 
      t.float :ratings
      t.string :review_by
      t.text :review
      t.integer :property_id
      t.integer :client_id

      t.timestamps
    end
  end
end
