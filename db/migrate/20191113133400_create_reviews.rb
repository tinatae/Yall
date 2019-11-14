class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false, default: 5
      t.integer :business_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :reviews, :business_id
  end
end
