const express = require('express');
const user   =require('../models/exercise');
const app     =express.Router();


//listing all the exercises
app.get("/", async (req, res, next) =>{
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});

//get information for a single exercise
app.get("/:id", (req, res, next) =>{
    user.get(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});
app.post("/getID", async (req, res, next) => {
    user.getId(req.body)
    .then(x => res.send(x))
    .catch(next)
})

 //delete an exercise
app.get("/deleteExercise/:id", (req, res, next ) => {
    user.deleteExercise(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});

//change the default reps by exercise name
app.post("/updatereps", (req, res, next) => {
    user.changeReps(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//change the default sets by exercise name
app.post("/updatesets", (req, res, next) => {
    user.changeSets(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//adding an exercise to the database
app.post("/", (req, res, next) =>{
    user.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;