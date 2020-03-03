const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const cors = require('cors');
const {API, ROUTES} = require('./config');


const app = express();

// app.use(
//   cors({
//     origin: [`${API.protocol}${API.domain}:4200`],
//     credentials: true,
//     optionsSuccessStatus: 200
//   })
// );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  session({
    secret: process.env.SESS_KEY,
    saveUninitialized: true,
    resave: true
  })
);

app.use(cookieParser());

app.use(API.baseUrl, ROUTES);

app.use(function(req, res, next) {
  res.sendStatus(400);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
