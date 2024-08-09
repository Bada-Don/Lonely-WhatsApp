const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'src')));

app.listen(3000, () => {
    console.log("App is listening to port 3000");
});

app.get("/", (req, res) => {
    res.render('home.ejs');
})

app.get('/', (req, res)=>{
    res.render('home.ejs');
})