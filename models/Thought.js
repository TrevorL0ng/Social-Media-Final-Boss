// Importing modules
const { kStringMaxLength } = require('buffer');
const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema({
    thoughtText:{
        type:String,
        required:true,
        validate: [({length}) => length > 0 && length <= 280, "Must be more than 1 and less than 280 characters"]
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username:{
        type:String,
        required: true,
    },
    reactions: [ReactionSchema],
    },
    {
    toJSON:{
        getters:true,
        virtuals:true
    }});

    ThoughtSchema.virtual('reactionCount').get(function() {return this.reactions.length;});

    const Thought = model('Thought', ThoughtSchema);
    module.exports = Thought;