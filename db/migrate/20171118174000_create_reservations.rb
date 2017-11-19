class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :guests
      t.integer :guides
      t.string  :requests

      t.timestamps
    end
  end
end
