const express = require('express');
const user   =require('../models/routine');
const app     =express.Router();

//get all available routines
app.get("/", async (req, res, next) =>{
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});

//get a specific routine by id
app.post("/myroutines", (req, res, next) =>{
    user.get(req.body)
    .then(x => res.send(x))
    .catch(next)
});

app.post("/getmyroutine", (req, res, next) => {
    user.routineId(req.body)
    .then(x => res.send(x))
    .catch(next)
})

//delete a routine by name(cascades)
app.post("/deleteroutine/", (req, res, next) => {
    user.deleteRoutine(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//add a new routine
app.post("/", (req, res, next) =>{
    user.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;