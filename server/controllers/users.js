const express    =require('express');
const user       =require('../models/user');
const app        =express.Router();


app.get("/", async (req, res, next) =>{
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});

app.post("/userid", (req, res, next) =>{
    user.get(req.body)
    .then(x => res.send(x))
    .catch(next)
});

app.get("/deleteuser/:id", (req, res, next) =>{
    user.deleteById(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});

app.post("/", (req, res, next) =>{
    user.add(req.body)
    .then(x=> res.send(x))
    .catch(next)
});

app.post("/login", (req, res, next) => {
    user.login(req.body.userName, req.body.password)
    .then(x=> res.send(x))
    .catch(next)
});

app.post("/changePassword", (req, res, next) =>{  
    user.changePassword(req.body.userName, req.body.oldPassword, req.body.newPassword)
    .then(x => res.send(x))
    .catch(next)
});

app.post("/getName", (req, res, next) =>{
    user.getName(req.body)
    .then(x=> res.send(x))
    .catch(next)
});

module.exports = app;
