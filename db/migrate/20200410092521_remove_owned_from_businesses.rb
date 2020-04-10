class RemoveOwnedFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :womenown, :string, default: "No"
    remove_column :businesses, :familyown, :string, default: "No"
  end
end
