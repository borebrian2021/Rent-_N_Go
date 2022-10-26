class AddClientIdToSpaces < ActiveRecord::Migration[7.0]
  def change
    add_column :spaces, :client_id, :integer
  end
end
