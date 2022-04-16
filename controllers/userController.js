const {User} = require('../models');

const userController = {
    getUsers(req, res){
        User.find({}).then(userData => res.json(userData)).catch(err => {console.log(err);});
    },
    addUser({body}, res){
        User.create(body).then(userData => res.json(userData)).catch(err =>{console.log(err);});
    },
    getUserID({params}, res){
        User.findOne({_id: params.id}).then(userData => res.json(userData)).catch(err =>{console.log(err);});
    },
    updateUser({params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, {new:true, runValidators: true}).then(userData =>{
            if(!userData){res.status(404).json({message:"No user with that ID"});
            return;}
            res.json(userData);
        }).catch(err =>{console.log(err);});
    },
    deleteUser({params}, res){
        User.findOneAndDelete({_id: params.id}).then(userData =>{
            if(!userData){res.status(404).json({message:"No user with that ID"});
            return;}
            res.json(userData);
        }).catch(err =>{console.log(err);});
    },
    addFriend({params}, res){
        User.findOneAndUpdate({_id: params.id}, {$push: {friends: params.friendID}},{runValidators: true, new:true})
        .then(userData =>{ 
            if(!userData){res.status(404).json({message:"No user with that ID"});
            return;}
            res.json(userData);
        }).catch(err =>{console.log(err);});
    }}

    module.exports = userController;
    