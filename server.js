const express = require('express');
const  bodyParser = require('body-parser');
const cors = require('cors');
const connectMongoDB = require('./config/mongoDB');
const { connectionRoute } = require('./routes/connectionRoute');


require('dotenv').config()
const app = express();
const port = process.env.PORT || 3001
connectMongoDB()


//midelware
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//routes
app.use('/connection', connectionRoute)

//start server
app.listen(port, ()=>{
    console.log(`Serveur demarre sur le port ${port}`)
})