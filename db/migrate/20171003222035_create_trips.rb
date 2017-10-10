class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.datetime   :date
      t.string     :length
      t.integer    :guests
      t.references :user

      t.timestamps
    end
  end
end
