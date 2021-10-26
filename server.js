const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const carsController = require('./controllers/cars');

require('dotenv').config();
const { DATABASE_URL, PORT = 3001} = process.env;


mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('open', () => console.log('You are connected to MongoDB'));
db.on('close', () => console.log('You are disconnected from MongoDB'));
db.on('error', (err) => console.log(err));


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to React-Car-App');
});

app.use('/cars', carsController);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
