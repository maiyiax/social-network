const router = require('express').Router();
const { getAllThoughts, getThoughtById, updateThought, deleteThought } = require('../../controllers/thought-controller');

module.exports = router;