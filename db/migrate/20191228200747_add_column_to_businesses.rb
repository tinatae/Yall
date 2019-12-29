class AddColumnToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :delivery, :boolean, null: false
    add_column :businesses, :takeout, :boolean, null: false
    add_index :businesses, :delivery
    add_index :businesses, :takeout
  end
end
