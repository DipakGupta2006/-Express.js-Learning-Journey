const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/service", (req, res) => {
    res.render("service");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});


app.listen(3000, () => {
    console.log("Server running at 3000 port");
});
