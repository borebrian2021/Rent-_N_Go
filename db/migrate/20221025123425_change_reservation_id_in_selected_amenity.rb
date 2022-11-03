class ChangeReservationIdInSelectedAmenity < ActiveRecord::Migration[7.0]
  def change
    change_column(:selected_amenities, :reservation_id, :integer, using: 'reservation_id::integer')
  end
end
