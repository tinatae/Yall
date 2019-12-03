json.extract! review, :id, :body, :rating, :business_id, :author_id, :starmaker



#   create_table "reviews", force: :cascade do |t|
#     t.text "body", null: false
#     t.integer "rating"
#     t.integer "business_id", null: false
#     t.integer "author_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["business_id"], name: "index_reviews_on_business_id"
#   end