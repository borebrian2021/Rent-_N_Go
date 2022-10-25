class ChangeStatusInPayments < ActiveRecord::Migration[7.0]
  def change
    change_column(:payments, :status, :string)
    change_column(:spaces, :status, :string)
  end
end
