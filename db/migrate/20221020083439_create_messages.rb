class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :client_id, null: false
      t.string :message

      t.timestamps
    end
  end
end
