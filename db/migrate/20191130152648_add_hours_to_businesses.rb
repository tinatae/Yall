class AddHoursToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :monopen, :integer, null: false
    add_column :businesses, :monclose, :integer, null: false
    add_column :businesses, :monopenend, :string, null: false
    add_column :businesses, :moncloseend, :string, null: false
    add_column :businesses, :tuesopen, :integer, null: false
    add_column :businesses, :tuesclose, :integer, null: false
    add_column :businesses, :tuesopenend, :string, null: false
    add_column :businesses, :tuescloseend, :string, null: false
    add_column :businesses, :wedopen, :integer, null: false
    add_column :businesses, :wedclose, :integer, null: false
    add_column :businesses, :wedopenend, :string, null: false
    add_column :businesses, :wedcloseend, :string, null: false
    add_column :businesses, :thursopen, :integer, null: false
    add_column :businesses, :thursclose, :integer, null: false
    add_column :businesses, :thursopenend, :string, null: false
    add_column :businesses, :thurscloseend, :string, null: false
    add_column :businesses, :friopen, :integer, null: false
    add_column :businesses, :friclose, :integer, null: false
    add_column :businesses, :friopenend, :string, null: false
    add_column :businesses, :fricloseend, :string, null: false
    add_column :businesses, :satopen, :integer, null: false
    add_column :businesses, :satclose, :integer, null: false
    add_column :businesses, :satopenend, :string, null: false
    add_column :businesses, :satcloseend, :string, null: false
    add_column :businesses, :sunopen, :integer, null: false
    add_column :businesses, :sunclose, :integer, null: false
    add_column :businesses, :sunopenend, :string, null: false
    add_column :businesses, :suncloseend, :string, null: false
  end
end
