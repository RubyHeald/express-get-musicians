const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;
app.listen(port, function (){
    console.log("Listen on port" + port)
})

//TODO: Create a GET /musicians route to return all musicians 

app.get("/musicians", async (request, response) =>{
    const musician = await Musician.findAll();
    response.json(musician);

})

app.get("musicians:id"), async (request, response) =>{
    const musician = await Musician.findByPk(req.params.musicianId)
    if (!musician){
        response.status(404).send({})
    }   else{
            response.send(musician)
        }
    }
module.exports = app;