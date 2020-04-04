class ChangeHours2InBusinesses < ActiveRecord::Migration[5.2]
  def change

    remove_index :businesses, :monclose
    remove_index :businesses, :tuesopen
    remove_index :businesses, :tuesclose
    remove_index :businesses, :wedopen
    remove_index :businesses, :wedclose
    remove_index :businesses, :thursopen
    remove_index :businesses, :thursclose
    remove_index :businesses, :friopen
    remove_index :businesses, :friclose
    remove_index :businesses, :satopen
    remove_index :businesses, :satclose
    remove_index :businesses, :sunopen
    remove_index :businesses, :sunclose

    change_column :businesses, :monopen, :integer, using: 'monopen::integer', null: false
    change_column :businesses, :monclose, :integer, using: 'monclose::integer', null: false
    change_column :businesses, :tuesopen, :integer, using: 'tuesopen::integer', null: false
    change_column :businesses, :tuesclose, :integer, using: 'tuesclose::integer', null: false
    change_column :businesses, :wedopen, :integer, using: 'wedopen::integer', null: false
    change_column :businesses, :wedclose, :integer, using: 'wedclose::integer', null: false
    change_column :businesses, :thursopen, :integer, using: 'thursopen::integer', null: false
    change_column :businesses, :thursclose, :integer, using: 'thursclose::integer', null: false
    change_column :businesses, :friopen, :integer, using: 'friopen::integer', null: false
    change_column :businesses, :friclose, :integer, using: 'friclose::integer', null: false
    change_column :businesses, :satopen, :integer, using: 'satopen::integer', null: false
    change_column :businesses, :satclose, :integer, using: 'satclose::integer', null: false
    change_column :businesses, :sunopen, :integer, using: 'sunopen::integer', null: false
    change_column :businesses, :sunclose, :integer, using: 'sunclose::integer', null: false

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
