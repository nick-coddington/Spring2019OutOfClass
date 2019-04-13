const express = require('express');
const user   =require('../models/routineExercise');
const app     =express.Router();

//this gives us all of the connections between exercises and routines
app.get("/", (req, res, next) =>{
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});

app.get("/:id", (req, res, next) =>{
    user.deleteById(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});

//this gets us the routine with the workouts and the default reps/sets
app.post("/routine", (req, res, next) =>{
    user.get(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//add a connection between a specific routine and a specific exercise
app.post("/", (req, res, next) =>{
    user.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;