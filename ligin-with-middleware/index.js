const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
// iska matlab hai ki jab bhi form submit hoga to uska data req.body me aa jayega 

app.use(express.static('public'));
// iska matlab hai ki public folder ke andar jo bhi static files hai wo directly access ho jayengi
app.set('view engine', 'ejs');
// iska matlab hai ki hum ejs ko view engine ke roop me use kar rahe hai

let isLogged = false;

function check(req, res, next){
    if(isLogged){
        next();
    } else {
        res.sendFile(path.join(__dirname, "public", "invalid.html"));
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(username === "dipak123" && password === "1234"){
        isLogged = true;
        return res.redirect("/dashboard");
    } else {
        res.sendFile(path.join(__dirname, "public", "login.html"));
    }
});

app.get("/dashboard", check, (req, res) => {
    res.render("dashboard");
});

app.listen(3000, () => {
    console.log("server running at port 3000");
});