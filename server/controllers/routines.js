const express = require('express');
const user   =require('../models/routine');
const app     =express.Router();

//get all available routines
app.get("/", (req,res) =>{

    user.getAll((err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
//get a specific routine by id
app.get("/:id", (req,res) =>{

    user.get(req.params.id, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
//delete a routine by name(cascades)
app.post("/deleteroutine", (req,res) => {

    console.log(req.body);
    user.deleteRoutine(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    })
})
//add a new routine
app.post("/", (req,res) =>{
    
    console.log(req.body);
    user.add(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});

module.exports = app;