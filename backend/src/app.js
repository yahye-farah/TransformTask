const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const trasformRoute = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(trasformRoute);

module.exports = app;
