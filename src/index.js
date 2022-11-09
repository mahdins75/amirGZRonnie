const { request, response, Router } = require('express');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const musicRoute = require('./routes/music');
const favoritRoute = require('./routes/favorit');
const albumRoute = require('./routes/album');
const trackRoute = require('./routes/track');
const artistRoute = require('./routes/artist');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const PORT = 5501;


///middlewares

app.use(express.json());

app.use((req, res, next)=>{
    console.log(`${req.method}:${req.url}`);
    next();
});

app.use('/api/music',musicRoute);
app.use('/api/favorit',favoritRoute);
app.use('/api/album', albumRoute);
app.use('/api/artist', artistRoute);
app.use('/api/track', trackRoute);


app.listen(PORT, ()=> console.log(`Runnig Express Server On Port ${PORT}!` ));
