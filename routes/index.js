var express = require('express');
var router = express.Router();

const routeUser = require('./routeUser');

router.use('/user', routeUser);

router.use('/', (req, res, next) => {
  res.status(200).render('Hello World');
});

module.exports = router;
