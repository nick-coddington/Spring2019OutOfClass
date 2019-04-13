const express = require('express');
const user    =require('../models/contactMethod');
const app     =express.Router();


app.get("/", (req, res, next) =>{
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});

app.get("/:id", (req, res, next) =>{
    user.get(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});

app.get("/deleteuser/:id", (req, res, next) =>{
    user.deleteById(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});

app.post("/updatehandle", (req, res, next) => {
    user.updatehandle(req.body)
    .then(x => res.send(x))
    .catch(next)
});

app.post("/", (req, res, next) =>{
    user.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;