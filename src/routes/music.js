const { Router } = require('express');

const router = Router();

const musicList = [
    {
        ID: '1',
        item: 'coldplay',
        genre: 'pop'
    },
    {
        ID: '2',
        item: 'oneD',
        genre: 'contry'
    },
    {
        ID: '3',
        item: 'Queen',
        genre: 'jass'
    },
    {
        ID: "6",
        item: "AA",
        genre: "light"
    },
    {
        ID: "7",
        item: "BB",
        genre: "light 2"
    },
];


router.get('/', function (request, response) {
    let genre  = request.query.genre;
    let  item  = request.query.item;
    let  ID  = request.query.ID;

    let reuslt = musicList;
    if (genre && (!ID || ID <= 0)) {
        console.log(genre);

        reuslt = reuslt.filter(m => m.genre == genre);
    }
    if (item && (!ID || ID <= 0)) {
    console.log(item);

        reuslt = reuslt.filter(m => m.item == item);
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
    const musicItem = musicList.find((g) => g.item === item);
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
    const musicGenre = musicList.find((g) => g.genre === genre);
    response.send(musicGenre);
});


///////Does not work!!!!!

// router.get('/music/:ID', (request, response) => {
//     const { ID } = request.params;
//     const musicID = musicList.find((g) => g.ID === ID);
//     response.send(musicID);
// });




// router.post('/', (request, response) => {
//     console.log(request.body);
//     musicList.push(request.body);
//     response.send(201);
// });


module.exports = router;