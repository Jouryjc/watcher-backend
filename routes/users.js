const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");
/* GET users listing. */
/*router.get('/!*', function(req, res, next) {
    console.log(req)
    res.send({name: 'yujuncheng', age: 23});
});*/

router.get('/insert', function(req, res){
    const responce = userController.insertUser('yujuncheng' , 23)
    res.render(JSON.stringify(responce))
});


module.exports = router;
