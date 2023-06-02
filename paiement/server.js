const express = require('express');


const items = require('./routes/api/paiements');

const app = express();

app.use(express.json());


app.use('/api/paiements', items);

const port = process.env.PORT || 5002;

app.listen(port, ()=> console.log(`Server started on port ${port}`));