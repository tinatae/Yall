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

User.create!(
    username: "jgschmidt",
    password: "schmidt100"
)

User.create!(
    username: "wavywavy",
    password: "oceanic"
)

User.create!(
    username: "MalloryP",
    password: "spark123"
)

Review.create!(
    rating: 4,
    body: "Probably the best latte I've ever had in my life! Was still $8 though so I docked a point. Beautiful views of the beach!",
    business_id: 3,
    author_id: 2
)

Review.create!(
    rating: 5,
    body: "Solid pours good people",
    business_id: 2,
    author_id: 3
)

Review.create!(
    rating: 5,
    body: "I ordered a dozen red velvet cupcakes for my sister's bachelorette & they were absolutely perfect! Also, very nice staff. Thank you so much!!",
    business_id: 1,
    author_id: 2
)

Review.create!(
    rating: 5,
    body: "BOMB BREAKFAST BURRITO. GET IT NOW!!!",
    business_id: 3,
    author_id: 4
)

Review.create!(
    rating: 1,
    body: "I showed up for Sunday brunch & the counterperson told me there was a 45 minute wait. I hung out for 45 minutes, came back & then a different waitstaff person said it'd be another 30 minutes. I left for good then-please find a better way to gauge wait times! If I'd known it'd be 2 hrs to get a table, I wouldn't have stayed!",
    business_id: 3,
    author_id: 5
)