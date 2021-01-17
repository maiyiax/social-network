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

// route /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

module.exports = router;