const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//passord will add on the fields for password, along with some
//validation and methods
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);