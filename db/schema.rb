# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_28_211830) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "category", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "website"
    t.string "phonenumber"
    t.string "address1", null: false
    t.string "address2", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pricepoint", null: false
    t.integer "monopen", null: false
    t.integer "monclose", null: false
    t.string "monopenend", null: false
    t.string "moncloseend", null: false
    t.integer "tuesopen", null: false
    t.integer "tuesclose", null: false
    t.string "tuesopenend", null: false
    t.string "tuescloseend", null: false
    t.integer "wedopen", null: false
    t.integer "wedclose", null: false
    t.string "wedopenend", null: false
    t.string "wedcloseend", null: false
    t.integer "thursopen", null: false
    t.integer "thursclose", null: false
    t.string "thursopenend", null: false
    t.string "thurscloseend", null: false
    t.integer "friopen", null: false
    t.integer "friclose", null: false
    t.string "friopenend", null: false
    t.string "fricloseend", null: false
    t.integer "satopen", null: false
    t.integer "satclose", null: false
    t.string "satopenend", null: false
    t.string "satcloseend", null: false
    t.integer "sunopen", null: false
    t.integer "sunclose", null: false
    t.string "sunopenend", null: false
    t.string "suncloseend", null: false
    t.string "delivery", default: "No", null: false
    t.string "takeout", default: "No", null: false
    t.index ["category"], name: "index_businesses_on_category"
    t.index ["delivery"], name: "index_businesses_on_delivery"
    t.index ["name"], name: "index_businesses_on_name", unique: true
    t.index ["pricepoint"], name: "index_businesses_on_pricepoint"
    t.index ["takeout"], name: "index_businesses_on_takeout"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "rating"
    t.integer "business_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_reviews_on_business_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
