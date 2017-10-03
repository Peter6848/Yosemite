class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.references :user
      t.string     :name
      t.string     :location
      t.text       :description

      t.timestamps
    end
  end
end
