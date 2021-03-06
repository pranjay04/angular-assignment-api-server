const express = require('express');
const cors = require('cors');

const indexRouter = require('./routes');

const port = process.env.PORT || 3005;
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_DB_ATLAS_URI)
  .then((result) => {
    console.log('Backend server is connected to mongodb server');
  })
  .catch((err) => {
    console.log('Backend server failed to connect with mongodb server');
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log('Server is lisening on port - ', port);
});

module.exports = app;
