const express   =require('express');
const user      =require('../models/userRelationship');
const app       =express.Router();

//gets all the relationships
app.get("/", (req, res, next) =>{
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});

//gets all friends for a user
app.post("/allfriends", (req, res, next) => {
    user.get(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//gets all pending friend requests for a user (sender/receiver)
app.post("/pendingRequests", (req, res, next) => {
    user.getRequests(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//Changes the status to friends
app.post("/friends", (req, res, next) => {
    user.acceptFriend(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//Changes the status to block
app.post("/block", (req, res, next) => {
    user.declineFriend(req.body)
    .then(x => res.send(x))
    .catch(next)
});

//add a friend with a status of pending request the lower id number will always be first to avoid duplicates
app.post("/", (req, res, next) => {
    user.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;
