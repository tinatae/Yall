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
    category: "Dessert",
    lat: 37.797514,
    lng: -122.406633,
    website: "http://sweetbbcakes.net",
    phonenumber: "4151119117",
    address1: "53 Ginsberg Way #2C",
    city: "San Francisco",
    state: "CA",
    zipcode: 94133,
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
    vegetarian: "Yes",
    vegan: "No",
    takesreservation: "No",
    creditcard: "Yes",
    googlepay: "Yes",
    applepay: "Yes",
    parking: "Street", 
    wheelchair: "Yes",
    goodforkids: "Yes",
    goodforgroups: "Yes",
    outdoor: "No",
    wifi: "No",
    dogsallowed: "No",
    genderneutralrestroom: "Yes",
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
    lat: 37.7861535,
    lng: -122.4015630,
    website: "http://whitewhalesf.com",
    phonenumber: "4152621535",
    address1: "935 3rd St",
    city: "San Francisco",
    state: "CA",
    zipcode: 94103,
    pricepoint: 1,
    monopen: 16,
    monclose: 26,
    tuesopen: 16,  
    tuesclose: 26,
    wedopen: 16,
    wedclose: 26,
    thursopen: 16,
    thursclose: 26,  
    friopen: 16,
    friclose: 26,
    satopen: 12,
    satclose: 26,
    sunopen: 12,
    sunclose: 26,
    delivery: "No",
    takeout: "No",
    vegetarian: "No",
    vegan: "No",
    takesreservation: "No",
    creditcard: "Yes",
    googlepay: "Yes",
    applepay: "Yes",
    parking: "Street", 
    wheelchair: "No",
    goodforkids: "No",
    goodforgroups: "Yes",
    outdoor: "No",
    wifi: "Yes",
    dogsallowed: "Yes",
    genderneutralrestroom: "No",
)

file4 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale1.jpeg')
whitewhale.photos.attach(io: file4, filename: 'whitewhale1.jpeg')

file5 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale2.jpeg')
whitewhale.photos.attach(io: file5, filename: 'whitewhale2.jpeg')

file6 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale3.jpeg')
whitewhale.photos.attach(io: file6, filename: 'whitewhale3.jpeg')

file7 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/whitewhale4.jpeg')
whitewhale.photos.attach(io: file7, filename: 'whitewhale4.jpeg')

# business3 = Business.create!(
#     name: "Hola Ola",
#     category: "Coffee & Tea",
#     lat: 37.8090439,
#     lng: -122.4149626,
#     website: "http://holaolasf.net",
#     phonenumber: "4151338182",
#     address1: "372 Pershing Dr",
#     city: "San Francisco",
#     state: "CA",
#     zipcode: 94129,
#     pricepoint: 2,
#     monopen: 6,
#     monclose: 18,
#     tuesopen: 6,
#     tuesclose: 18,
#     wedopen: 6,
#     wedclose: 18,
#     thursopen: 6,
#     thursclose: 18,
#     friopen: 6,
#     friclose: 20,
#     satopen: 6,
#     satclose: 20,
#     sunopen: 6,
#     sunclose: 20,
#     delivery: "No",
#     takeout: "Yes",
#     vegetarian: "Yes",
#     vegan: "Yes",
#     takesreservation: "No",
#     creditcard: "Yes",
#     googlepay: "Yes",
#     applepay: "Yes",
#     parking: "Private Lot", 
#     wheelchair: "Yes",
#     goodforkids: "Yes",
#     goodforgroups: "Yes",
#     outdoor: "Yes",
#     wifi: "Yes",
#     dogsallowed: "Yes",
#     genderneutralrestroom: "Yes",
# )

# file8 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola1.jpg')
# file9 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola2.jpg')
# file10 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola3.jpg')
# file11 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/holaola4.jpg')

# business3.photos.attach(io: file8, filename: 'holaola1.jpg')
# business3.photos.attach(io: file9, filename: 'holaola2.jpg')
# business3.photos.attach(io: file10, filename: 'holaola3.jpg')
# business3.photos.attach(io: file11, filename: 'holaola4.jpg')

# business4 = Business.create!(
#     name: "Telegraph Place",
#     category: "Restaurants",
#     lat: 37.8013,
#     lng: -122.4057,
#     website: "http://telegraphplacesf.com",
#     phonenumber: "4156166577",
#     address1: "372 Filbert St 5th Floor",
#     city: "San Francisco",
#     state: "CA",
#     zipcode: 94133,
#     pricepoint: 4,
#     monopen: -100,
#     monclose: -100,
#     tuesopen: -100,
#     tuesclose: -100,
#     wedopen: 17,
#     wedclose: 23,
#     thursopen: 17,
#     thursclose: 24,  
#     friopen: 17,
#     friclose: 24,
#     satopen: 17,
#     satclose: 24,
#     sunopen: 17,
#     sunclose: 24,
#     delivery: "No",
#     takeout: "Yes",
#     vegetarian: "No",
#     vegan: "No",
#     takesreservation: "Yes",
#     creditcard: "Yes",
#     googlepay: "Yes",
#     applepay: "Yes",
#     parking: "Street", 
#     wheelchair: "Yes",
#     goodforkids: "No",
#     goodforgroups: "No",
#     outdoor: "No",
#     wifi: "Yes",
#     dogsallowed: "No",
#     genderneutralrestroom: "No",
# )

# file12 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph1.jpeg')
# file13 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph2.jpeg')
# file14 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph3.jpeg')
# file15 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/telegraph4.jpeg')

# business4.photos.attach(io: file12, filename: 'telegraph1.jpeg')
# business4.photos.attach(io: file13, filename: 'telegraph2.jpeg')
# business4.photos.attach(io: file14, filename: 'telegraph3.jpeg')
# business4.photos.attach(io: file15, filename: 'telegraph4.jpeg')

# business5 = Business.create!(
#     name: "Tumbler Room",
#     category: "Bars",
#     lat: 37.7667756,
#     lng: -122.4230867,
#     website: "http://tumblerroom.com",
#     phonenumber: "4158862537",
#     address1: "943 Albion St",
#     city: "San Francisco",
#     state: "CA",
#     zipcode: 94103,
#     pricepoint: 3,
#     monopen: -100,
#     monclose: -100,
#     tuesopen: 16,
#     tuesclose: 26,
#     wedopen: 16,
#     wedclose: 26,
#     thursopen: 16,
#     thursclose: 26,  
#     friopen: 16,
#     friclose: 26,
#     satopen: 16,
#     satclose: 26,
#     sunopen: 16,
#     sunclose: 26,
#     delivery: "No",
#     takeout: "No",
#     vegetarian: "Yes",
#     vegan: "Yes",
#     takesreservation: "Yes",
#     creditcard: "Yes",
#     googlepay: "Yes",
#     applepay: "Yes",
#     parking: "Street", 
#     wheelchair: "Yes",
#     goodforkids: "No",
#     goodforgroups: "No",
#     outdoor: "No",
#     wifi: "Yes",
#     dogsallowed: "No",
#     genderneutralrestroom: "Yes",
# )

# file16 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/tumblerroom1.jpg')
# file17 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/tumblerroom2.jpg')
# file18 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/tumblerroom3.jpg')
# # file19 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/tumblerroom4.jpg')
# file20 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/tumblerroom5.jpg')

# business5.photos.attach(io: file16, filename: 'tumblerroom1.jpg')
# business5.photos.attach(io: file17, filename: 'tumblerroom2.jpg')
# business5.photos.attach(io: file18, filename: 'tumblerroom3.jpg')
# # business5.photos.attach(io: file19, filename: 'tumblerroom4.jpg')
# business5.photos.attach(io: file20, filename: 'tumblerroom5.jpg')

# business6 = Business.create!(
#     name: "Eastern Market Hall",
#     category: "Restaurants",
#     lat: 37.7632589,
#     lng: -122.4859440,
#     website: "http://easterneatssf.com",
#     phonenumber: "4153278376",
#     address1: "500 Irving St Suite 250",
#     city: "San Francisco",
#     state: "CA",
#     zipcode: 94116,
#     pricepoint: 1,
#     monopen: 10,
#     monclose: 19,
#     tuesopen: 10,
#     tuesclose: 19,
#     wedopen: 10,
#     wedclose: 19,
#     thursopen: 10,
#     thursclose: 21,  
#     friopen: 10,
#     friclose: 23,
#     satopen: 10,
#     satclose: 23,
#     sunopen: 10,
#     sunclose: 19,
#     delivery: "No",
#     takeout: "Yes",
#     vegetarian: "Yes",
#     vegan: "Yes",
#     takesreservation: "No",
#     creditcard: "Yes",
#     googlepay: "No",
#     applepay: "No",
#     parking: "Private Lot", 
#     wheelchair: "Yes",
#     goodforkids: "Yes",
#     goodforgroups: "Yes",
#     outdoor: "Yes",
#     wifi: "No",
#     dogsallowed: "Yes",
#     genderneutralrestroom: "Yes",
# )

# file21 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/eastern1.jpg')
# file22 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/eastern2.jpg')
# file23 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/eastern3.jpg')
# file24 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/eastern4.jpg')

# business6.photos.attach(io: file21, filename: 'eastern1.jpg')
# business6.photos.attach(io: file22, filename: 'eastern2.jpg')
# business6.photos.attach(io: file23, filename: 'eastern3.jpg')
# business6.photos.attach(io: file24, filename: 'eastern4.jpg')

# business7 = Business.create!(
#     name: "Sugar Shoppe",
#     category: "Dessert",
#     lat: 37.7656786,
#     lng: -122.2414147,
#     website: "http://sugarshoppe.net",
#     phonenumber: "5107842725",
#     address1: "480 Webb Ave",
#     city: "Alameda",
#     state: "CA",
#     zipcode: 94501,
#     pricepoint: 1,
#     monopen: 10,
#     monclose: 19,
#     tuesopen: 10,
#     tuesclose: 19,
#     wedopen: 10,
#     wedclose: 19,
#     thursopen: 10,
#     thursclose: 19,  
#     friopen: 10,
#     friclose: 22,
#     satopen: 10,
#     satclose: 22,
#     sunopen: 10,
#     sunclose: 22,
#     delivery: "No",
#     takeout: "Yes",
#     vegetarian: "Yes",
#     vegan: "No",
#     takesreservation: "Yes",
#     creditcard: "Yes",
#     googlepay: "No",
#     applepay: "No",
#     parking: "Street", 
#     wheelchair: "Yes",
#     goodforkids: "Yes",
#     goodforgroups: "Yes",
#     outdoor: "Yes",
#     wifi: "No",
#     dogsallowed: "Yes",
#     genderneutralrestroom: "Yes",
# )

# file25 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sugarshoppe1.jpg')
# file26 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sugarshoppe2.jpg')
# file27 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sugarshoppe3.jpg')
# file28 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/sugarshoppe4.jpg')

# business7.photos.attach(io: file25, filename: 'sugarshoppe1.jpg')
# business7.photos.attach(io: file26, filename: 'sugarshoppe2.jpg')
# business7.photos.attach(io: file27, filename: 'sugarshoppe3.jpg')
# business7.photos.attach(io: file28, filename: 'sugarshoppe4.jpg')

# business8 = Business.create!(
#     name: "Katagama",
#     category: "Restaurants",
#     lat: 37.7379514,
#     lng: -122.2408417,
#     website: "http://katagamasushi.com",
#     phonenumber: "5105282526",
#     address1: "630 Island Dr 5A",
#     city: "Alameda",
#     state: "CA",
#     zipcode: 94621,
#     pricepoint: 3, 
#     monopen: 11,
#     monclose: 20,
#     tuesopen: 11,
#     tuesclose: 20,
#     wedopen: 11,
#     wedclose: 20,
#     thursopen: 11,
#     thursclose: 20,  
#     friopen: 11,
#     friclose: 22,
#     satopen: 11,
#     satclose: 22,
#     sunopen: -100,
#     sunclose: -100,
#     delivery: "Yes",
#     takeout: "Yes",
#     vegetarian: "No",
#     vegan: "No",
#     takesreservation: "Yes",
#     creditcard: "Yes",
#     googlepay: "No",
#     applepay: "No",
#     parking: "Public Parking", 
#     wheelchair: "Yes",
#     goodforkids: "No",
#     goodforgroups: "No",
#     outdoor: "No",
#     wifi: "No",
#     dogsallowed: "No",
#     genderneutralrestroom: "No",
# )

# file29 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/katagama1.jpg')
# file30 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/katagama2.jpg')
# file31 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/katagama3.jpg')
# file32 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/katagama4.jpg')

# business8.photos.attach(io: file29, filename: 'katagama1.jpg')
# business8.photos.attach(io: file30, filename: 'katagama2.jpg')
# business8.photos.attach(io: file31, filename: 'katagama3.jpg')
# business8.photos.attach(io: file32, filename: 'katagama4.jpg')

# business9 = Business.create!(
#     name: "Brasserie Belmonde",
#     category: "Restaurants",
#     lat: 37.7961250,
#     lng: -122.2780111,
#     website: "http://belmondeoakland.com",
#     phonenumber: "5102356633",
#     address1: "95 Washington St",
#     city: "Oakland",
#     state: "CA",
#     zipcode: 94607,
#     pricepoint: 3, 
#     monopen: 11,
#     monclose: 21,
#     tuesopen: 11,
#     tuesclose: 21,
#     wedopen: 11,
#     wedclose: 22,
#     thursopen: 11,
#     thursclose: 22,  
#     friopen: 11,
#     friclose: 24,
#     satopen: 11,
#     satclose: 24,
#     sunopen: 11,
#     sunclose: 22,
#     delivery: "Yes",
#     takeout: "Yes",
#     vegetarian: "No",
#     vegan: "No",
#     takesreservation: "Yes",
#     creditcard: "Yes",
#     googlepay: "Yes",
#     applepay: "Yes",
#     parking: "Public Parking", 
#     wheelchair: "Yes",
#     goodforkids: "Yes",
#     goodforgroups: "Yes",
#     outdoor: "Yes",
#     wifi: "No",
#     dogsallowed: "No",
#     genderneutralrestroom: "Yes",
# )

# file33 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/belmonde1.jpg')
# file34 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/belmonde2.jpg')
# file35 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/belmonde3.jpg')
# file36 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/belmonde4.jpg')

# business9.photos.attach(io: file33, filename: 'belmonde1.jpg')
# business9.photos.attach(io: file34, filename: 'belmonde2.jpg')
# business9.photos.attach(io: file35, filename: 'belmonde3.jpg')
# business9.photos.attach(io: file36, filename: 'belmonde4.jpg')

# business10 = Business.create!(
#     name: "Chococat Cafe",
#     category: "Coffee & Tea",
#     lat: 37.8681526,
#     lng: -122.2573048,
#     website: "http://chococatcafe.com",
#     phonenumber: "5102462622",
#     address1: "638 Durant Ave Unit #2A",
#     city: "Berkeley",
#     state: "CA",
#     zipcode: 94704,
#     pricepoint: 2, 
#     monopen: 7,
#     monclose: 20,
#     tuesopen: 7,
#     tuesclose: 20,
#     wedopen: 7,
#     wedclose: 20,
#     thursopen: 7,
#     thursclose: 20,  
#     friopen: 7,
#     friclose: 24,
#     satopen: 7,
#     satclose: 24,
#     sunopen: 7,
#     sunclose: 24,
#     delivery: "No",
#     takeout: "Yes",
#     vegetarian: "Yes",
#     vegan: "No",
#     takesreservation: "No",
#     creditcard: "Yes",
#     googlepay: "No",
#     applepay: "No",
#     parking: "Street", 
#     wheelchair: "Yes",
#     goodforkids: "No",
#     goodforgroups: "No",
#     outdoor: "No",
#     wifi: "Yes",
#     dogsallowed: "No",
#     genderneutralrestroom: "No",
# )

# file37 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/chococat1.jpg')
# file38 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/chococat2.jpg')
# file39 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/chococat3.jpg')
# file40 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/chococat4.jpg')

# business10.photos.attach(io: file37, filename: 'chococat1.jpg')
# business10.photos.attach(io: file38, filename: 'chococat2.jpg')
# business10.photos.attach(io: file39, filename: 'chococat3.jpg')
# business10.photos.attach(io: file40, filename: 'chococat4.jpg')

# business11 = Business.create!(
#     name: "Green Plate",
#     category: "Restaurants",
#     lat: 37.8790292,
#     lng: -122.2678220,
#     website: "http://greenplate.com",
#     phonenumber: "5104733637",
#     address1: "638 Cedar St",
#     city: "Berkeley",
#     state: "CA",
#     zipcode: 94709,
#     pricepoint: 2, 
#     monopen: 10,
#     monclose: 20,
#     tuesopen: 10,
#     tuesclose: 20,
#     wedopen: 10,
#     wedclose: 20,
#     thursopen: 10,
#     thursclose: 20,  
#     friopen: 10,
#     friclose: 20,
#     satopen: 10,
#     satclose: 20,
#     sunopen: 10,
#     sunclose: 20,
#     delivery: "Yes",
#     takeout: "Yes",
#     vegetarian: "Yes",
#     vegan: "Yes",
#     takesreservation: "No",
#     creditcard: "Yes",
#     googlepay: "No",
#     applepay: "No",
#     parking: "Private Lot", 
#     wheelchair: "Yes",
#     goodforkids: "Yes",
#     goodforgroups: "Yes",
#     outdoor: "Yes",
#     wifi: "Yes",
#     dogsallowed: "No",
#     genderneutralrestroom: "Yes",
# )

# file41 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/green1.jpg')
# file42 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/green2.jpg')
# file43 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/green3.jpg')
# file44 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/green4.jpg')

# business11.photos.attach(io: file41, filename: 'green1.jpg')
# business11.photos.attach(io: file42, filename: 'green2.jpg')
# business11.photos.attach(io: file43, filename: 'green3.jpg')
# business11.photos.attach(io: file44, filename: 'green4.jpg')

business12 = Business.create!(
    name: "Lucia",
    category: "Bars",
    lat: 37.8076720,
    lng: -122.2699919,
    website: "http://luciaoakland.com",
    phonenumber: "5105824265",
    address1: "3220 Telegraph Ave",
    city: "Oakland",
    state: "CA",
    zipcode: 94612,
    pricepoint: 2, 
    monopen: 16,
    monclose: 25,
    tuesopen: 16,
    tuesclose: 25,
    wedopen: 16,
    wedclose: 25,
    thursopen: 16,
    thursclose: 25,  
    friopen: 16,
    friclose: 26,
    satopen: 9,
    satclose: 26,
    sunopen: 9,
    sunclose: 25,
    delivery: "No",
    takeout: "No",
    vegetarian: "Yes",
    vegan: "No",
    takesreservation: "Yes",
    creditcard: "Yes",
    googlepay: "Yes",
    applepay: "Yes",
    parking: "Street", 
    wheelchair: "Yes",
    goodforkids: "Yes",
    goodforgroups: "Yes",
    outdoor: "No",
    wifi: "Yes",
    dogsallowed: "No",
    genderneutralrestroom: "Yes",
)

file45 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/lucia1.jpg')
file46 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/lucia2.jpg')
file47 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/lucia3.jpg')
file48 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/lucia4.jpg')

# business12.photos.attach(io: file45, filename: 'lucia1.jpg')
# business12.photos.attach(io: file46, filename: 'lucia2.jpg')
# business12.photos.attach(io: file47, filename: 'lucia3.jpg')
# business12.photos.attach(io: file48, filename: 'lucia4.jpg')

# business13 = Business.create!(
#     name: "Pixel Point",
#     category: "Coffee & Tea",
#     lat: 37.8468400,
#     lng: -122.2909785,
#     website: "http://pixelpoint.com",
#     phonenumber: "5107493577",
#     address1: "946 65th St",
#     city: "Emeryville",
#     state: "CA",
#     zipcode: 94608,
#     pricepoint: 2, 
#     monopen: 6,
#     monclose: 20,
#     tuesopen: 6,
#     tuesclose: 20,
#     wedopen: 6,
#     wedclose: 20,
#     thursopen: 6,
#     thursclose: 20,  
#     friopen: 6,
#     friclose: 22,
#     satopen: 8,
#     satclose: 22,
#     sunopen: 8,
#     sunclose: 20,
#     delivery: "No",
#     takeout: "Yes",
#     vegetarian: "Yes",
#     vegan: "Yes",
#     takesreservation: "No",
#     creditcard: "Yes",
#     googlepay: "Yes",
#     applepay: "Yes",
#     parking: "Street", 
#     wheelchair: "Yes",
#     goodforkids: "Yes",
#     goodforgroups: "Yes",
#     outdoor: "Yes",
#     wifi: "Yes",
#     dogsallowed: "Yes",
#     genderneutralrestroom: "Yes",
# )

# file49 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/pixel1.jpg')
# file50 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/pixel2.jpg')
# file51 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/pixel3.jpg')
# file52 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/pixel4.jpg')

# business13.photos.attach(io: file49, filename: 'pixel1.jpg')
# business13.photos.attach(io: file50, filename: 'pixel2.jpg')
# business13.photos.attach(io: file51, filename: 'pixel3.jpg')
# business13.photos.attach(io: file52, filename: 'pixel4.jpg')

# business14 = Business.create!(
#     name: "Squash Blossom",
#     category: "Coffee & Tea",
#     lat: 37.8985052,
#     lng: -122.0619337,
#     website: "http://squashblossomwc.com",
#     phonenumber: "9257782747",
#     address1: "482 Locust St",
#     city: "Walnut Creek",
#     state: "CA",
#     zipcode: 94596,
#     pricepoint: 2, 
#     monopen: 7,
#     monclose: 19,
#     tuesopen: 7,
#     tuesclose: 19,
#     wedopen: 7,
#     wedclose: 19,
#     thursopen: 7,
#     thursclose: 19,  
#     friopen: 7,
#     friclose: 22,
#     satopen: 9,
#     satclose: 22,
#     sunopen: 9,
#     sunclose: 20,
#     delivery: "No",
#     takeout: "Yes",
#     vegetarian: "Yes",
#     vegan: "Yes",
#     takesreservation: "No",
#     creditcard: "Yes",
#     googlepay: "No",
#     applepay: "No",
#     parking: "Street", 
#     wheelchair: "Yes",
#     goodforkids: "Yes",
#     goodforgroups: "Yes",
#     outdoor: "Yes",
#     wifi: "Yes",
#     dogsallowed: "No",
#     genderneutralrestroom: "No",
# )

# file53 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/squash1.jpg')
# file54 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/squash2.jpg')
# file55 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/squash3.jpg')
# file56 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/squash4.jpg')

# business14.photos.attach(io: file53, filename: 'squash1.jpg')
# business14.photos.attach(io: file54, filename: 'squash2.jpg')
# business14.photos.attach(io: file55, filename: 'squash3.jpg')
# business14.photos.attach(io: file56, filename: 'squash4.jpg')

business15 = Business.create!(
    name: "Big Craw Richmond",
    category: "Restaurants",
    lat: 37.9341683,
    lng: -122.3463082,
    website: "http://bigcrawrichmond.com",
    phonenumber: "5107424272",
    address1: "8927 Bissell Ave",
    city: "Richmond",
    state: "CA",
    zipcode: 94804,
    pricepoint: 2, 
    monopen: 17,
    monclose: 23,
    tuesopen: 17,
    tuesclose: 23,
    wedopen: 17,
    wedclose: 23,
    thursopen: 17,
    thursclose: 24,  
    friopen: 17,
    friclose: 25,
    satopen: 10,
    satclose: 25,
    sunopen: 10,
    sunclose: 23,
    delivery: "Yes",
    takeout: "Yes",
    vegetarian: "No",
    vegan: "No",
    takesreservation: "Yes",
    creditcard: "Yes",
    googlepay: "No",
    applepay: "No",
    parking: "Street", 
    wheelchair: "Yes",
    goodforkids: "Yes",
    goodforgroups: "Yes",
    outdoor: "No",
    wifi: "Yes",
    dogsallowed: "No",
    genderneutralrestroom: "No",
)

file57 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/craw1.jpg')
file58 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/craw2.jpg')
file59 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/craw3.jpg')
file60 = open('https://yallrrr-seeds.s3-us-west-1.amazonaws.com/craw4.jpg')

business15.photos.attach(io: file57, filename: 'craw1.jpg')
business15.photos.attach(io: file58, filename: 'craw2.jpg')
business15.photos.attach(io: file59, filename: 'craw3.jpg')
business15.photos.attach(io: file60, filename: 'craw4.jpg')


User.create!(
    username: "DemoUser",
    password: "123456"
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
    username: "Wavywavy",
    password: "oceanic"
)

User.create!(
    username: "MalloryP",
    password: "spark123"
)

User.create!(
    username: "CoffeeInMyCup",
    password: "zerosugar"
)

User.create!(
    username: "ssam_the_ssnake",
    password: "ssnacks"
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

