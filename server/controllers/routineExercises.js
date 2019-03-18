const express = require('express');
const user   =require('../models/routineExercise');
const app     =express.Router();

//this gives us all of the connections between exercises and routines
app.get("/", (req,res) =>{

    user.getAll((err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
//this gets us the routine with the workouts and the default reps/sets
app.post("/routine", (req,res) =>{

    user.get(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
//add a connection between a specific routine and a specific exercise
app.post("/", (req,res) =>{
    
    console.log(req.body);
    user.add(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});

module.exports = app;