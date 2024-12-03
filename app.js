const express = require('express');
const  bodyParser = require('body-parser');
const cors = require('cors')


require('dotenv').config()
const app = express();
const port = process.env.PORT || 3001


//midelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//start server
app.listen(port, ()=>{
    console.log(`Serveur demarre sur le port ${port}`)
})