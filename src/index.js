const { request, response, Router } = require('express');
const express = require('express');
var bodyParser = require('body-parser');

const musicRoute = require('./routes/music');

const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = 3001;


///middlewares

app.use(express.json());

app.use((req, res, next)=>{
    console.log(`${req.method}:${req.url}`);
    next();
});

app.use('/api/music',musicRoute);

app.listen(PORT, ()=> console.log(`Runnig Express Server On Port ${PORT}!` ));
