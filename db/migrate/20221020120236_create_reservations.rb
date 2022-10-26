class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :space_id, null: false 
      t.datetime :kickoff_date
      t.datetime :end_date
      t.integer :client_id
      t.string :total_cash

      t.timestamps
    end
  end
end
