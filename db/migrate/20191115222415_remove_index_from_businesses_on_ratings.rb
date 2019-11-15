class RemoveIndexFromBusinessesOnRatings < ActiveRecord::Migration[5.2]
  def change
    remove_index "ratings", name: "index_businesses_on_ratings"
  end
end
