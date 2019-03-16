const express = require('express');
const user   =require('../models/exercise');
const app     =express.Router();
//listing all the exercises
app.get("/", (req,res) =>{

    user.getAll((err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
//get information for a single exercise
app.get("/:id", (req,res) =>{

    user.get(req.params.id, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});
 //delete an exercise
app.get("/deleteExercise/:id", (req, res) => {
    user.deleteExercise(req.params.id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});
//change the default reps by exercise name
app.post("/updatereps", (req,res) => {
    console.log(req.body);
    user.changeReps(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});
//change the default sets by exercise name
app.post("/updatesets", (req,res) => {
    console.log(req.body);
    user.changeSets(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    })
})
//adding an exercise to the database
app.post("/", (req,res) =>{
    
    console.log(req.body);
    user.add(req.body, (err,data) =>{
        if(err) throw err;
        res.send(data);
    });

});

module.exports = app;