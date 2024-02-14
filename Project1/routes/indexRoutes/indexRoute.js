const express = require('express');

const indexController = require('../../controller/indexController/indexController').indexControl;

const router = express.Router();


router.get('/', indexController);


module.exports = router;
