// Pulling in needed modules and functions
const router = require('express').Router();
const {getThoughts, getThoughtID, addThought, updateThought, deleteThought, addReaction, deleteReaction} = require('../../controllers/thoughtController');

// Routing

router.route('/').get(getThoughts);

router.route('/:userID').post(addThought);

router.route('/:thoughtID').get(getThoughtID).put(updateThought).delete(deleteThought);

router.route('/:thoughtID/reactions').post(addReaction);

router.route('/:thoughtID/reactions/reactionID').delete(deleteReaction);

module.exports = router;