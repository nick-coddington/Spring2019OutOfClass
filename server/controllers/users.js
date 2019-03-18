const express = require('express');
const user   =require('../models/user');
const app     =express.Router();

app.post("/login", (req,res) => {
    console.log(req.body);
    user.login(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});
app.get("/", (req,res) =>{

    user.getAll((err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:id", (req,res) =>{

    user.get(req.params.id, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.get("/deleteuser/:id", (req,res) =>{

    user.deleteById(req.params.id, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
app.post("/changePassword/", (req,res) =>{
    
    console.log(req.body);
    user.changePass(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });
});
app.post("/", (req,res) =>{
    
    console.log(req.body);
    user.add(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});

module.exports = app;
