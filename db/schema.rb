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

ActiveRecord::Schema.define(version: 2020_04_09_093045) do

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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pricepoint", null: false
    t.integer "monopen", null: false
    t.integer "monclose", null: false
    t.integer "tuesopen", null: false
    t.integer "tuesclose", null: false
    t.integer "wedopen", null: false
    t.integer "wedclose", null: false
    t.integer "thursopen", null: false
    t.integer "thursclose", null: false
    t.integer "friopen", null: false
    t.integer "friclose", null: false
    t.integer "satopen", null: false
    t.integer "satclose", null: false
    t.integer "sunopen", null: false
    t.integer "sunclose", null: false
    t.string "delivery", default: "No", null: false
    t.string "takeout", default: "No", null: false
    t.string "city", default: "City", null: false
    t.string "state", default: "State", null: false
    t.integer "zipcode", default: 0
    t.string "vegetarian", default: "No", null: false
    t.string "vegan", default: "No", null: false
    t.string "womenown", default: "No"
    t.string "familyown", default: "No"
    t.string "takesreservation", default: "No"
    t.string "creditcard", default: "No", null: false
    t.string "googlepay", default: "No"
    t.string "applepay", default: "No"
    t.string "parking", default: "No"
    t.string "wheelchair", default: "No", null: false
    t.string "goodforkids", default: "No", null: false
    t.string "goodforgroups", default: "No", null: false
    t.string "outdoor", default: "No", null: false
    t.string "wifi", default: "No", null: false
    t.string "dogsallowed", default: "No", null: false
    t.string "genderneutralrestroom", default: "No"
    t.index ["category"], name: "index_businesses_on_category"
    t.index ["city"], name: "index_businesses_on_city"
    t.index ["creditcard"], name: "index_businesses_on_creditcard"
    t.index ["delivery"], name: "index_businesses_on_delivery"
    t.index ["dogsallowed"], name: "index_businesses_on_dogsallowed"
    t.index ["friclose"], name: "index_businesses_on_friclose"
    t.index ["friopen"], name: "index_businesses_on_friopen"
    t.index ["goodforgroups"], name: "index_businesses_on_goodforgroups"
    t.index ["goodforkids"], name: "index_businesses_on_goodforkids"
    t.index ["monclose"], name: "index_businesses_on_monclose"
    t.index ["monopen"], name: "index_businesses_on_monopen"
    t.index ["name"], name: "index_businesses_on_name", unique: true
    t.index ["outdoor"], name: "index_businesses_on_outdoor"
    t.index ["pricepoint"], name: "index_businesses_on_pricepoint"
    t.index ["satclose"], name: "index_businesses_on_satclose"
    t.index ["satopen"], name: "index_businesses_on_satopen"
    t.index ["state"], name: "index_businesses_on_state"
    t.index ["sunclose"], name: "index_businesses_on_sunclose"
    t.index ["sunopen"], name: "index_businesses_on_sunopen"
    t.index ["takeout"], name: "index_businesses_on_takeout"
    t.index ["thursclose"], name: "index_businesses_on_thursclose"
    t.index ["thursopen"], name: "index_businesses_on_thursopen"
    t.index ["tuesclose"], name: "index_businesses_on_tuesclose"
    t.index ["tuesopen"], name: "index_businesses_on_tuesopen"
    t.index ["vegan"], name: "index_businesses_on_vegan"
    t.index ["vegetarian"], name: "index_businesses_on_vegetarian"
    t.index ["wedclose"], name: "index_businesses_on_wedclose"
    t.index ["wedopen"], name: "index_businesses_on_wedopen"
    t.index ["wheelchair"], name: "index_businesses_on_wheelchair"
    t.index ["wifi"], name: "index_businesses_on_wifi"
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
