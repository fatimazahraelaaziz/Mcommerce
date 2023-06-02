const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/products');

const app = express();

app.use(express.json());

const db = require('./config/key').mongoURI;

mongoose
        .connect(db)
        .then( ()=> console.log('MongoDB Connected ...'))
        .catch( err=> console.log(err));

app.use('/api/products', items);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));