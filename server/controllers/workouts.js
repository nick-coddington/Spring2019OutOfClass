const express = require('express');
const user   =require('../models/workout');
const app     =express.Router();

//get all the workouts done
app.get("/", async (req, res, next) =>{
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});

//get a certain workout by person id and date
app.get("/:id", (req, res, next) =>{
    user.get(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//delete a specific workout by person id and exercise id
app.get("/deleteworkout/:id", (req, res, next) => {
    user.delete(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});

//add a workout
app.post("/", (req, res, next) =>{
    user.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;