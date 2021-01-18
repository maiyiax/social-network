const router = require('express').Router();
const { getAllUsers, addFriend, removeFriend, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');

// set up get all User and Post
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up get one, update and delete at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// route to add and remove friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)



module.exports = router;