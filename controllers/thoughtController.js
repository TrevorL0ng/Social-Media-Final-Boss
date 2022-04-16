const {Thought, User} = require('../models');

const ThoughtController = {
    getThoughts(req, res){
        Thought.find({}).then(thoughtData => res.json(thoughtData)).catch(err => {console.log(err);});
    },
    getThoughtID({params}, res){
        Thought.findOne({_id: params.thoughtID}).then(thoughtData => res.json(thoughtData)).catch(err => {console.log(err);});
    },
    addThought({params, body}, res){
        Thought.create(body)
            .then(({_id }) =>{
                return User.findOneAndUpdate(
                    {_id: params.userID},
                    {$push: {thoughts: _id}},
                    {new: true});
            }).then(thoughtData => {
                if(!thoughtData){res.status(404).json({message: 'Bad thought data'});
                return;}
            res.json(thoughtData);}).catch(err => res.json(err));
    },
    updateThought({params, body}, res){
        Thought.findByIdAndUpdate({_id: params.thoughtID}, body, {runValidators:true, new:true})
        .then(thoughtData => {if(!thoughtData){res.status(404).json({message: "No user with that ID"});
        return;}
        res.json(thoughtData);}).catch(err => res.json(err));
    },
    deleteThought({params}, res){
        Thought.findByIdAndDelete({_id: params.thoughtID}, {runValidators:true, new:true})
        .then(thoughtData => {if(!thoughtData){res.status(404).json({message: "No user with that ID"});
        return;}
        res.json(thoughtData);}).catch(err => res.json(err));
    },
    addReaction({params, body}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtID},
            {$push: {reactions:body}},
            {runValidators:true, new:true}).then(thoughtData => {
                if(!thoughtData){res.status(404).json({message: 'Bad thought data'});
                return;}
            res.json(thoughtData);}).catch(err => res.json(err));
    },
    deleteReaction({params}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtID},
            {$pull: {reactions: {reactionID: params.reactionID}}},
            {runValidators:true, new:true}).then(thoughtData => {
                if(!thoughtData){res.status(404).json({message: 'Bad thought data'});
                return;}
            res.json(thoughtData);}).catch(err => res.json(err));
    }
}

module.exports = ThoughtController;