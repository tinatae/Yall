# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.delete_all
User.delete_all
Review.delete_all

Business.create!(
    name: "Sweet Babycakes",
    ratings: 4,
    category: "Restaurant",
    lat: 37.797514,
    lng: -122.406633,
    website: "http://sweetbbcakes.net",
    phonenumber: "(415)111-9117",
    address1: "53 Ginsberg Way",
    address2: "San Francisco, CA 94133"
)

Business.create!(
    name: "White Whale Saloon",
    ratings: 3,
    category: "Bar",
    lat: 37.799418,
    lng: -122.401381,
    website: "http://whitewhalesf.com",
    phonenumber: "(415)262-1535",
    address1: "935 Battery St",
    address2: "San Francisco, CA 94111"
)
Business.create!(
    name: "Hola Ola",
    ratings: 5,
    category: "Coffee & Tea",
    lat: 37.790417,
    lng: -122.484914,
    website: "http://holaolasf.net",
    phonenumber: "(415)133-8182",
    address1: "372 Pershing Dr",
    address2: "San Francisco, CA 94129"
)

User.create!(
    username: "hello",
    password: "stayawhile"
)

User.create!(
    username: "Pinkelle",
    password: "Lenfant"
)

Review.create!(
    rating: 4,
    body: "Probably the best latte I've ever had in my life! Was still $8 though so I docked a point. Beautiful view of the beach!",
    business_id: 3,
    author_id: 2
)