// import mongoose
const mongoose = require('mongoose');

// import express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.use(require('./routes'));

// tell mongoose which database to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
    // configuration options
    useFindAndModify: false,
    userNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));