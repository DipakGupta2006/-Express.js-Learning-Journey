const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"))
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(username == "dipak123" && password == "dipak@123"){
        return res.render("dashboard", {username, password})
    }

    res.sendFile(path.join(__dirname, "public", "invalid.html"))
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});