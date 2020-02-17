import express from "express";
import createError from "http-errors";
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import hbs from 'express-handlebars';
import bodyParser from 'body-parser';


let app = express();

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/' }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// var indexRouter = require('../routes/index');
// var usersRouter = require('../routes/users');

// app.use('/', indexRouter);
// app.use('/users', usersRouter);



app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enable CORS
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
  next();
});

const productRoutes = require('./api/routes/products.ts');
const orderRoutes = require('./api/routes/orders.ts');
const trackingRoutes = require('./api/routes/tracking.ts');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/tacking', trackingRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
  // res.render('error');
});


module.exports = app;
