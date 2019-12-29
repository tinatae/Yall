class ChangeDeliveryAndTakeoutInBusinesses < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :delivery, :string, default: "No"
    change_column :businesses, :takeout, :string, default: "No"
  end
end
