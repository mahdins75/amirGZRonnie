const { Router } = require('express');
var  musicList= require('../data')
const router = Router();



router.get('/', function (request, response) {
    let genre  = request.query.genre;
    let  item  = request.query.item;
    let  ID  = request.query.ID;
console.log(musicList.musicList);
    let reuslt = musicList.musicList;
    if (genre && (!ID || ID <= 0)) {
        console.log(genre);

        reuslt = reuslt.filter(m => m.genre.toLowerCase().includes(genre.toLowerCase()));
    }
    if (item && (!ID || ID <= 0)) {
    console.log(item);

        reuslt = reuslt.filter(m => m.item.toLowerCase().includes(item.toLowerCase()));
    }
    if (ID&&ID>0) {
    console.log(ID);

        reuslt = reuslt.filter(m => m.ID == ID);
    }
    if (reuslt) {
        response.send(reuslt);
    }
    else {
        response.status(404).send(`part ${item} was not found`);
    }
    // response.send(musicItem);
});
router.get('/:item', (request, response) => {
    const { item } = request.params;
    const musicItem = musicList.musicList.find((g) => g.item === item);
    if (musicItem) {
        response.send(musicItem);
    }
    else {
        response.status(404).send(`part ${item} was not found`);
    }
    // response.send(musicItem);
});

router.get('/:genre', (request, response) => {
    const { genre } = request.params;
    const musicGenre = musicList.musicList.find((g) => g.genre === genre);
    response.send(musicGenre);
});


///////Does not work!!!!!

// router.get('/music/:ID', (request, response) => {
//     const { ID } = request.params;
//     const musicID = musicList.find((g) => g.ID === ID);
//     response.send(musicID);
// });




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
router.get('/GetMyPlayList', function (request, response) {
    
     response.send(favorits);
});
module.exports = router;