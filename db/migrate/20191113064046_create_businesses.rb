class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
 
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :website
      t.string :phonenumber
      t.string :address1, null: false
      t.string :address2, null: false

      t.timestamps
    end
    add_index :businesses, :name, unique: true
    # add_index :businesses, :ratings
    add_index :businesses, :category 
  end
end
