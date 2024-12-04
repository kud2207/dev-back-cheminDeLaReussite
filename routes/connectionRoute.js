const express = require('express');
const { creadAdmin } = require('../controllers/adminController');
const { creerEleve } = require('../controllers/eleveController');
const connectionRoute = express.Router()

//http://localhost:3000/connection/...

connectionRoute.post("/admin/loginUp", creadAdmin);
connectionRoute.post("/eleve/loginUp", creerEleve)

module.exports={
    connectionRoute
}