//to do
var express = require('express')
var router = express.Router();
var db = require('./../Database/database')

router.get('/create', function(request, response) {
    response.render('users/create', {

    })
})

module.exports = router;