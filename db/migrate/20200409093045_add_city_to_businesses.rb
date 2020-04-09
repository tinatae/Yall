class AddCityToBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :address2, :string, null: false
    add_column :businesses, :city, :string, null: false, default: "City"
    add_column :businesses, :state, :string, null: false, default: "State"
    add_column :businesses, :zipcode, :integer, default: "Zipcode"

    add_column :businesses, :vegetarian, :string, null: false, default: "No"
    add_column :businesses, :vegan, :string, null: false, default: "No"
    add_column :businesses, :womenown, :string, default: "No"
    add_column :businesses, :familyown, :string, default: "No"
    add_column :businesses, :takesreservation, :string, default: "No"
    add_column :businesses, :creditcard, :string, null: false, default: "No"
    add_column :businesses, :googlepay, :string, default: "No"
    add_column :businesses, :applepay, :string, default: "No"
    add_column :businesses, :parking, :string, default: "No"
    add_column :businesses, :wheelchair, :string, null: false, default: "No"
    add_column :businesses, :goodforkids, :string, null: false, default: "No"
    add_column :businesses, :goodforgroups, :string, null: false, default: "No"
    add_column :businesses, :outdoor, :string, null: false, default: "No"
    add_column :businesses, :wifi, :string, null: false, default: "No"
    add_column :businesses, :dogsallowed, :string, null: false, default: "No"
    add_column :businesses, :genderneutralrestroom, :string, default: "No"

    add_index :businesses, :vegetarian
    add_index :businesses, :vegan
    add_index :businesses, :creditcard
    add_index :businesses, :wheelchair
    add_index :businesses, :goodforkids
    add_index :businesses, :goodforgroups
    add_index :businesses, :outdoor
    add_index :businesses, :wifi
    add_index :businesses, :dogsallowed

    add_index :businesses, :city
    add_index :businesses, :state
  end
end
