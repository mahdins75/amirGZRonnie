const { Router } = require('express');
var  musicList= require('../data2')
const router = Router();
router.get('/', function (request, response) {
    
    response.send(favorits);
});
module.exports = router;