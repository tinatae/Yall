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
    monopenend: "AM",
    monclose: 6,
    moncloseend: "PM",
    tuesopen: 10,
    tuesopenend: "AM",
    tuesclose: 6,
    tuescloseend: "PM",
    wedopen: 10,
    wedopenend: "AM",
    wedclose: 6,
    wedcloseend: "PM",
    thursopen: 10,
    thursopenend: "AM",
    thursclose: 6,
    thurscloseend: "PM",
    friopen: 10,
    friopenend: "AM",
    friclose: 6,
    fricloseend: "PM",
    satopen: 10,
    satopenend: "AM",
    satclose: 6,
    satcloseend: "PM",
    sunopen: 10,
    sunopenend: "AM",
    sunclose: 4,
    suncloseend: "PM",
    delivery: "Yes",
    takeout: "Yes",
    opennow: "Always",
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
    monopen: 4,
    monopenend: "PM",
    monclose: 2,
    moncloseend: "AM",
    tuesopen: 4,
    tuesopenend: "PM",
    tuesclose: 2,
    tuescloseend: "AM",
    wedopen: 4,
    wedopenend: "PM",
    wedclose: 2,
    wedcloseend: "AM",
    thursopen: 4,
    thursopenend: "PM",
    thursclose: 2,
    thurscloseend: "AM",
    friopen: 4,
    friopenend: "PM",
    friclose: 2,
    fricloseend: "AM",
    satopen: 12,
    satopenend: "PM",
    satclose: 2,
    satcloseend: "AM",
    sunopen: 12,
    sunopenend: "PM",
    sunclose: 2,
    suncloseend: "AM",
    delivery: "No",
    takeout: "No",
    opennow: "Always",
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
    monopenend: "AM",
    monclose: 6,
    moncloseend: "PM",
    tuesopen: 6,
    tuesopenend: "AM",
    tuesclose: 6,
    tuescloseend: "PM",
    wedopen: 6,
    wedopenend: "AM",
    wedclose: 6,
    wedcloseend: "PM",
    thursopen: 6,
    thursopenend: "AM",
    thursclose: 6,
    thurscloseend: "PM",
    friopen: 6,
    friopenend: "AM",
    friclose: 8,
    fricloseend: "PM",
    satopen: 6,
    satopenend: "AM",
    satclose: 8,
    satcloseend: "PM",
    sunopen: 6,
    sunopenend: "AM",
    sunclose: 8,
    suncloseend: "PM",
    delivery: "No",
    takeout: "Yes",
    opennow: "Always",
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
    monopen: 5,
    monopenend: "PM",
    monclose: 11,
    moncloseend: "PM",
    tuesopen: 5,
    tuesopenend: "PM",
    tuesclose: 11,
    tuescloseend: "PM",
    wedopen: 5,
    wedopenend: "PM",
    wedclose: 11,
    wedcloseend: "PM",
    thursopen: 5,
    thursopenend: "PM",
    thursclose: 12,
    thurscloseend: "AM",
    friopen: 5,
    friopenend: "PM",
    friclose: 12,
    fricloseend: "AM",
    satopen: 5,
    satopenend: "PM",
    satclose: 12,
    satcloseend: "AM",
    sunopen: 5,
    sunopenend: "PM",
    sunclose: 12,
    suncloseend: "AM",
    delivery: "No",
    takeout: "Yes",
    opennow: "Always",
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

