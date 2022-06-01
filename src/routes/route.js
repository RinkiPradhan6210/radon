const express = require('express');
//const externalModule = require('../logger/logger')

const router = express.Router();
const rinki =require('../logger/logger')
const date = require('../util/helper')
const trim = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    //res.send('My latest and this first api!')
    rinki.welcome()
    date.mydata()
    date.mymonth()
    date.getbatchinfo()
    trim.trim()
    trim.changetoLowerCase()
    trim.changetoUpperCase()
});

module.exports = router;
// adding this comment for no reason