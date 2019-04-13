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
app.get("/:id", (req, res, next) =>{
    user.get(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});

//delete a routine by name(cascades)
app.get("/deleteroutine/:id", (req, res, next) => {
    user.deleteRoutine(req.params.id)
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