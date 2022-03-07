var express = require('express');
var router = express.Router();

const routeUser = require('./routeUser');




router.use('/user', routeUser);


module.exports = router;
