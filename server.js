const mongoose = require('mongoose');
const express = require('express');
const expressSession = require('express-session');
require('dotenv').config();

const app = express();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on('connected',() => console.log('Connected to MongoDB'));
db.on('error', () => console.log(`MongoDB Error: ${error.message}`));

app.use(express.urlencoded({extended: false}));

app.use(expressSession({
  secret: process.env.secret,
  resave: false,
  saveUnitialized: false
}));

const PORT = process.env.PORT || 80;
app.listen({PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
}})