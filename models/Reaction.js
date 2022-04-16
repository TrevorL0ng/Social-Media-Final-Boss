// Importing modules
const {Schema, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionID:{
        type:Schema.Types.ObjectId,
        default: () => new Types.ObjectId() 
    },
    reactionBody:{
        type: String,
        required: true,
        validate: [({length}) => length <= 280, "Must be less than 280 characters"]
    },
    username:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
});

module.exports = ReactionSchema;