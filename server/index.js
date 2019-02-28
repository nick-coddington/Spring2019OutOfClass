const express = require('express');
const path    = require('path');
const users   = require('./controllers/users');

const app     = express();
const port    = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../index.html")));
app.get('/', (req,res) => res.send("Welcome to the Tiger's Den"));
app.use('/users', users);



app.listen(port, () => console.log(`Example app http://localhost:${port}!`));
