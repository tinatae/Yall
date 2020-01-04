class AddOpenNowToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :opennow, :string, default: "Always"
    add_index :businesses, :opennow
  end
end
