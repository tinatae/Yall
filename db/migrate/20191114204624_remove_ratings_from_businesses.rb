class RemoveRatingsFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :ratings, :integer
  end
end
