const { Router } = require('express');
var  musicList= require('../data2')
const router = Router();

// let genre_id  = request.query.genre_id;
// let  tracks  = request.query.tracks;
// let  parent  = request.query.parent;
// let  title  = request.query.title;
// let  top_level  = request.query.partop_levelent;
let favorits=[];

router.get('/', function (request, response) {
    let genre  = request.query.tracks;
    let  item  = request.query.title;
    let  ID  = request.query.genre_id;
    let  parent  = request.query.parent;
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
    if (parent&&parent>0) {
        console.log(parent);
    
            reuslt = reuslt.filter(m => m.parent == parent);
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




// router.post('/addToMyFavorits', (request, response) => {
//    var result=musicList.musicList.filter(m=>m.genre_id==request.body.genre_id);
//    if(result)
//    {
//     var validation=favorits.filter(m=>m.genre_id==request.body.genre_id);
//     console.log("validation :"+validation.length);
//     if(validation.length<=0){
//         favorits.push(result[0]);
//         console.log(favorits);

//         response.send({staus:true,"message":`the track ${result[0].title} added to you playlist `});
//     }
//     else{
//         response.send({staus:false,"message":`the track ${result[0].title} already exists on your play list `});

//     }
    
//    }
//    else{
//     response.send({"status":false,"message":"could not find the item to selected add to paylist failed"});

//    }
// });
// router.post('/removeFromMyFavorits', (request, response) => {
//      var validation=favorits.filter(m=>m.genre_id==request.body.genre_id);
//      console.log(validation);
//      if(validation.length>0){
//          console.log(validation);
//          favorits.pop(validation);
//          response.send({staus:true,"message":`the track ${validation[0].title} removed from you playlist `});
//      }
//      else{
//          response.send({staus:false,"message":`the track you selected does not exist on your play list `});
//      }
//  });
router.get('/GetMyPlayList', function (request, response) {
    
     response.send(favorits);
});

module.exports = router;