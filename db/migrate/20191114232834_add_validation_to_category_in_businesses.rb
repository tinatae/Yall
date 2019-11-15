class AddValidationToCategoryInBusinesses < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :category, :string, null: false
  end
end
