const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/commandes');

const app = express();

app.use(express.json());

const db = require('./config/key').mongoURI;

mongoose
        .connect(db)
        .then( ()=> console.log('MongoDB Connected ...'))
        .catch( err=> console.log(err));

app.use('/api/commandes', items);

const port = process.env.PORT || 5001;

app.listen(port, ()=> console.log(`Server started on port ${port}`));