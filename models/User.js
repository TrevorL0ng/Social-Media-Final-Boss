// Pulling in mongoose
const {Schema, model, Types} = require('mongoose');

const User = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required:true,
        match: [/.+@.!\..+/, 'Enter a valid email']
    },
    thoughts: [],
    friends: [this]
    },
    {
    toJSON:{
        getters:true,
        virtuals:true
    }
    });