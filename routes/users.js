const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', function(req, res){
    console.log(req)
    var user = new User({name: 'yujuncheng', password: 24});

    user.save(function(data) {
        console.log(data)
        res.send(data.data)
    })
    // res.render('error', { title: '404', result: result });
});


module.exports = router;
