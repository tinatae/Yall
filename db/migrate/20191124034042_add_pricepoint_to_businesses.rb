class AddPricepointToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :pricepoint, :integer, null: false
    add_index :businesses, :pricepoint
  end
end
