require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const passportSetup = require("./passport/setup.js");

mongoose.Promise = Promise;
mongoose
  .connect(process.env.MONGODB_URI, {useMongoClient: true})
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
  origin: ['http://localhost:4200']
}))

// Session setup
app.use(session({
  secret: "Yuzu",
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


// Passport import
passportSetup(app);

// backend API route
const templeRouter = require('./routes/temple-router.js');
app.use('/api', templeRouter);

const authRouter = require('./routes/auth-routes.js');
app.use('/api', authRouter)

// afer your routers, SEND the Angular HTML (insteal of 404)
app.use((req, res, next) => {
  res.sendFile(`${__dirname}/public/index.html`)
})



module.exports = app;
