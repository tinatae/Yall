class ChangeHoursInBusinesses < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :monopen, :string, null: false
    change_column :businesses, :monclose, :string, null: false
    remove_column :businesses, :monopenend, :string, null: false
    remove_column :businesses, :moncloseend, :string, null: false
    change_column :businesses, :tuesopen, :string, null: false
    change_column :businesses, :tuesclose, :string, null: false
    remove_column :businesses, :tuesopenend, :string, null: false
    remove_column :businesses, :tuescloseend, :string, null: false
    change_column :businesses, :wedopen, :string, null: false
    change_column :businesses, :wedclose, :string, null: false
    remove_column :businesses, :wedopenend, :string, null: false
    remove_column :businesses, :wedcloseend, :string, null: false
    change_column :businesses, :thursopen, :string, null: false
    change_column :businesses, :thursclose, :string, null: false
    remove_column :businesses, :thursopenend, :string, null: false
    remove_column :businesses, :thurscloseend, :string, null: false
    change_column :businesses, :friopen, :string, null: false
    change_column :businesses, :friclose, :string, null: false
    remove_column :businesses, :friopenend, :string, null: false
    remove_column :businesses, :fricloseend, :string, null: false
    change_column :businesses, :satopen, :string, null: false
    change_column :businesses, :satclose, :string, null: false
    remove_column :businesses, :satopenend, :string, null: false
    remove_column :businesses, :satcloseend, :string, null: false
    change_column :businesses, :sunopen, :string, null: false
    change_column :businesses, :sunclose, :string, null: false
    remove_column :businesses, :sunopenend, :string, null: false
    remove_column :businesses, :suncloseend, :string, null: false
    remove_column :businesses, :opennow, :string, default: "Always"
 
    add_index :businesses, :monopen
    add_index :businesses, :monclose
    add_index :businesses, :tuesopen
    add_index :businesses, :tuesclose       
    add_index :businesses, :wedopen
    add_index :businesses, :wedclose
    add_index :businesses, :thursopen
    add_index :businesses, :thursclose
    add_index :businesses, :friopen
    add_index :businesses, :friclose
    add_index :businesses, :satopen
    add_index :businesses, :satclose
    add_index :businesses, :sunopen
    add_index :businesses, :sunclose      
  end
end

# def change
#   add_column :businesses, :opennow, :string, default: "Always"
    # add_index :businesses, :opennow
#   end