require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/yuzu-back-end', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo of Yuzu-back-end!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// CORS setup
app.use(cors({
  credentials: true,
  origion: ['http//localhost:4200']
}))


// backend API route
const templeRouter = require('./routes/temple-router');
app.use('/api', templeRouter);


module.exports = app;
