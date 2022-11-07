const { Router } = require('express');
var  musicList= require('../data')
const router = Router();



let favorits=[];


router.post('/addToMyFavorits', (request, response) => {
   var result=musicList.musicList.filter(m=>m.ID==request.body.ID);
   if(result)
   {
    var validation=favorits.filter(m=>m.ID==request.body.ID);
    console.log("validation :"+validation.length);
    if(validation.length<=0){
        favorits.push(result[0]);
        console.log(favorits);

        response.send({staus:true,"message":`the track ${result[0].item} added to you playlist `});
    }
    else{
        response.send({staus:false,"message":`the track ${result[0].item} already exists on your play list `});

    }
    
   }
   else{
    response.send({"status":false,"message":"could not find the item to selected add to paylist failed"});

   }
});
router.post('/removeFromMyFavorits', (request, response) => {
     var validation=favorits.filter(m=>m.ID==request.body.ID);
     console.log(validation);
     if(validation.length>0){
         console.log(validation);
         favorits.pop(validation);
         response.send({staus:true,"message":`the track ${validation[0].item} removed from you playlist `});
     }
     else{
         response.send({staus:false,"message":`the track you selected does not exist on your play list `});
     }
 });
router.get('/', function (request, response) {
    
     response.send(favorits);
});
module.exports = router;