const express   =require('express');
const user      =require('../models/userRelationship');
const app       =express.Router();

//gets all the relationships
app.get("/", (req,res) =>{

    user.getAll((err,data) =>{
        if(err) throw err;
        res.send(data);
    });
});
//gets all friends for a user
app.post("/allfriends", (req,res) => {
    console.log(req.body);
    user.get(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});
//gets all pending friend requests for a user (sender/receiver)
app.post("/pendingRequests", (req,res) => {
    console.log(req.body);
    user.getRequests(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});
//Changes the status to friends
app.post("/friends", (req,res) => {

    console.log(req.body);
    user.acceptFriend(req.body, (err,data) =>{
        if (err) throw err;
        res.send(data);
    })
})
//Changes the status to block
app.post("/block", (req,res) => {
    
    console.log(req.body);
    user.declineFriend(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add a friend with a status of pending request the lower id number will always be first to avoid duplicates
app.post("/", (req,res) => {
    
    console.log(req.body);
    user.add(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;
