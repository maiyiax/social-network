const router = require('express').Router();
const { getAllUsers, addFriend, removeFriend, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');

module.exports = router;