# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Business.delete_all
User.delete_all
Review.delete_all

sweetbabycakes = Business.create!(
    name: "Sweet Babycakes",
    category: "Coffee & Tea",
    lat: 37.797514,
    lng: -122.406633,
    website: "http://sweetbbcakes.net",
    phonenumber: "(415)111-9117",
    address1: "53 Ginsberg Way",
    address2: "San Francisco, CA 94133",
    pricepoint: 2,
    monopen: 10,
    monclose: 18,
    tuesopen: 10,
    tuesclose: 18,
    wedopen: 10,
    wedclose: 18,
    thursopen: 10,
    thursclose: 18,
    friopen: 10,
    friclose: 18,
    satopen: 10,
    satclose: 18,  
    sunopen: 10,
    sunclose: 16,
    delivery: "Yes",
    takeout: "Yes",
)

file = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sweetbabycakes1.jpeg')
sweetbabycakes.photos.attach(io: file, filename: 'sweetbabycakes1.jpeg')

file1 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sweetbabycakes2.jpeg')
sweetbabycakes.photos.attach(io: file1, filename: 'sweetbabycakes2.jpeg')

file2 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sweetbabycakes3.jpeg')
sweetbabycakes.photos.attach(io: file2, filename: 'sweetbabycakes3.jpeg')

file3 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sweetbabycakes4.jpeg')
sweetbabycakes.photos.attach(io: file3, filename: 'sweetbabycakes4.jpeg')


whitewhale = Business.create!(
    name: "White Whale Saloon",
    category: "Bars",
    lat: 37.799418,
    lng: -122.401381,
    website: "http://whitewhalesf.com",
    phonenumber: "(415)262-1535",
    address1: "935 Battery St",
    address2: "San Francisco, CA 94111",
    pricepoint: 1,
    monopen: 16,
    monclose: 2,
    tuesopen: 16,  
    tuesclose: 2,
    wedopen: 16,
    wedclose: 2,
    thursopen: 16,
    thursclose: 2,  
    friopen: 16,
    friclose: 2,
    satopen: 12,
    satclose: 2,
    sunopen: 12,
    sunclose: 2,
    delivery: "No",
    takeout: "No",
)

file4 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale1.jpeg')
whitewhale.photos.attach(io: file4, filename: 'whitewhale1.jpeg')

file5 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale2.jpeg')
whitewhale.photos.attach(io: file5, filename: 'whitewhale2.jpeg')

file6 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale3.jpeg')
whitewhale.photos.attach(io: file6, filename: 'whitewhale3.jpeg')

file7 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale4.jpeg')
whitewhale.photos.attach(io: file7, filename: 'whitewhale4.jpeg')

business3 = Business.create!(
    name: "Hola Ola",
    category: "Restaurants",
    lat: 37.790417,
    lng: -122.484914,
    website: "http://holaolasf.net",
    phonenumber: "(415)133-8182",
    address1: "372 Pershing Dr",
    address2: "San Francisco, CA 94129",
    pricepoint: 2,
    monopen: 6,
    monclose: 18,
    tuesopen: 6,
    tuesclose: 18,
    wedopen: 6,
    wedclose: 18,
    thursopen: 6,
    thursclose: 18,
    friopen: 6,
    friclose: 20,
    satopen: 6,
    satclose: 20,
    sunopen: 6,
    sunclose: 20,
    delivery: "No",
    takeout: "Yes",
)

file8 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola1.jpeg')
file9 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola2.jpeg')
file10 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola3.jpeg')
file11 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola4.jpeg')

business3.photos.attach(io: file8, filename: 'holaola1.jpeg')
business3.photos.attach(io: file9, filename: 'holaola2.jpeg')
business3.photos.attach(io: file10, filename: 'holaola3.jpeg')
business3.photos.attach(io: file11, filename: 'holaola4.jpeg')

business4 = Business.create!(
    name: "Telegraph Place",
    category: "Restaurants",
    lat: 37.8013,
    lng: -122.4057,
    website: "http://telegraphplacesf.com",
    phonenumber: "(415)616-6577",
    address1: "372 Filbert St",
    address2: "San Francisco, CA 94133",
    pricepoint: 4,
    monopen: 17,
    monclose: 23,
    tuesopen: 17,
    tuesclose: 23,
    wedopen: 17,
    wedclose: 23,
    thursopen: 17,
    thursclose: 0,  
    friopen: 17,
    friclose: 0,
    satopen: 17,
    satclose: 0,
    sunopen: 17,
    sunclose: 0,
    delivery: "No",
    takeout: "Yes",
)

file12 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph1.jpeg')
file13 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph2.jpeg')
file14 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph3.jpeg')
file15 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph4.jpeg')

business4.photos.attach(io: file12, filename: 'telegraph1.jpeg')
business4.photos.attach(io: file13, filename: 'telegraph2.jpeg')
business4.photos.attach(io: file14, filename: 'telegraph3.jpeg')
business4.photos.attach(io: file15, filename: 'telegraph4.jpeg')

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

