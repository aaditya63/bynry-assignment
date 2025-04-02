const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    photo: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    address : {
        type:String,
        required:true
    },
    contact : {
        type:String,
        required:true
    },
    interests : {
        type:String,
    },
    
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
