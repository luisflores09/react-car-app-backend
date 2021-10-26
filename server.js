const express = require('express');
const app = express();

require('dotenv').config();

const { PORT = 3001} = process.env;

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
