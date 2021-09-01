require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const route = require('./routes/index.js');
const db = require('./config/db/index');

// Connect to DB
db.connect();

const app = express();
const port = 8080;

// Passport config
require('./config/passport'); //vượt qua passport để config trang đăng nhâp/đăng ký
app.use(
    session({
        secret: 'adsa897adsa98bs',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
        resave: false,
        saveUninitialized: false,
    }),
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Decode Request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(logger('dev'));
app.use(cookieParser());

// HTTP logger
// app.use(morgan('combined'));

// Template engine Handlebars
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Router Init
route(app);

app.listen(port, function () {
    console.log(`Server is listening at Port : ${port}`);
});
