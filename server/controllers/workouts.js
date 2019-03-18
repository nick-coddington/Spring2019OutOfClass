const express = require('express');
const user   =require('../models/workout');
const app     =express.Router();

//get all the workouts done
app.get("/", (req,res) =>{

    user.getAll((err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
//get a certain workout by person id
app.get("/:id", (req,res) =>{

    user.get(req.params.id, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
//delete a specific workout by person id and exercise id
app.post("/deleteworkout", (req,res) => {
    console.log(req.body);
    user.delete(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    })
})
//add a workout
app.post("/", (req,res) =>{
    
    console.log(req.body);
    user.add(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});

module.exports = app;