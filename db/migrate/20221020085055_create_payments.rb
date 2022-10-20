class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.integer :reservation_id, null: false
      t.string :payment_method
      t.integer :total
      t.boolean :status

      t.timestamps
    end
  end
end
