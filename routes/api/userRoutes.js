// Pulling in needed modules and functions
const router = require('express').Router();
const{ getUsers, addUser, getUserID, updateUser, deleteUser, addFriend } = require('../../controllers/userController');

// Routing
router.route('/').get(getUsers).post(addUser);

router.route('/:id').get(getUserID).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendID').post(addFriend)

module.exports = router;