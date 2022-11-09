const { Router } = require('express');
var  albumList= require('../album')
const router = Router();

// let genre_id  = request.query.genre_id;
// let  tracks  = request.query.tracks;
// let  parent  = request.query.parent;
// let  title  = request.query.title;
// let  top_level  = request.query.partop_levelent;
let favorits=[];

album_id: 
album_comments: 
album_date_created: 
album_date_released: 
album_engineer: 
album_favorites:
album_handle: 
album_image_file:
album_images: 
album_information: 
album_listens: 
album_producer: 
album_title: 
album_tracks:
album_type:
album_url: 
artist_name: 
artist_url: 
tags: []
router.get('/', function (request, response) {
    let genre  = request.query.album_comments;
    let  item  = request.query.album_title;
    let  ID  = request.query.album_id;
    let  parent  = request.query.album_tracks;
    let reuslt = albumList.albumList;
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
    const albumItem = albumList.albumList.find((g) => g.item === item);
    if (albumList) {
        response.send(albumList);
    }
    else {
        response.status(404).send(`part ${item} was not found`);
    }
    // response.send(musicItem);
});

router.get('/:genre', (request, response) => {
    const { genre } = request.params;
    const albumGenre = albumList.albumList.find((g) => g.genre === genre);
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