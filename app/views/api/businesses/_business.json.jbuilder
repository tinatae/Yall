json.extract! business, :id, :name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2, :average_rating

#     t.string "name", null: false
#     t.string "category", null: false
#     t.float "lat", null: false
#     t.float "lng", null: false
#     t.string "website"
#     t.string "phonenumber"
#     t.string "address1", null: false
#     t.string "address2", null: false

#     t.index ["category"], name: "index_businesses_on_category"
#     t.index ["name"], name: "index_businesses_on_name", unique: true