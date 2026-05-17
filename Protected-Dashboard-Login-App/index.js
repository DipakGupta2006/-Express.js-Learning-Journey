// Project title- Protected-Dashboard-Login-App

const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if(username === "admin" && password === "password"){
        res.render("dashboard", {username});
    }
    else{
        res.sendFile(path.join(__dirname, "public", "invalid.html"))
    }
});

app.listen(3000, () => {
    console.log("Server running at 3000 port");
});