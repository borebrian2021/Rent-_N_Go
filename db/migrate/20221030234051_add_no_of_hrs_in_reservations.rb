class AddNoOfHrsInReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :no_of_hours, :integer
  end
end
