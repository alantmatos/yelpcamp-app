const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places , descriptors} = require('./seedHelpers');


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,    
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for ( let i = 0; i < 50; i++){
        const randomcity = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random()*50) + 10;
        const camp = new Campground({
            location: `${cities[randomcity].city}, ${cities[randomcity].state}}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quae explicabo impedit dicta expedita maxime incidunt. Debitis, fugiat omnis, ab cupiditate quis blanditiis, magnam voluptas sequi similique rerum repudiandae at!",
            price: price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});