const express           = require('express');
const path              = require('path');
const users             = require('./controllers/users');
const workouts          = require('./controllers/workouts');
const exercises         = require('./controllers/exercises');
const routines          = require('./controllers/routines');
const contactMethods    = require('./controllers/contactMethods');
const routineExercises  = require('./controllers/routineExercises');
const userRelationships = require('./controllers/userRelationships')

const app     = express();
const port    = 3000;

app.use(function(req,res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../index.html")));
app.get('/', (req,res) => res.send("Welcome to the Tiger's Den"));
app.use('/users', users);
app.use('/workouts',workouts);
app.use('/exercises',exercises);
app.use('/routines', routines);
app.use('/contactMethods', contactMethods);
app.use('/routineExercises',routineExercises);
app.use('/userRelationships', userRelationships);

app.use(function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send({msg: err.message})
})



app.listen(port, () => console.log(`Example app http://localhost:${port}!`));
