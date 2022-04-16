// Pulling in mongoose
const {Schema, model, Types} = require('mongoose');

const UserSchema = new Schema({
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

    UserSchema.virtual('friendCount').get(function(){ return this.friends.length;})

    const User = model('User', UserSchema);
    module.exports = User;