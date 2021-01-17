const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, deleteThought } = require('../../controllers/thought-controller');


// set up get all thoughts
router
    .route('/')
    .get(getAllThoughts);


// get a single thought
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// set up route to post thought
router
    .route('/:userId')
    .post(addThought);

module.exports = router;