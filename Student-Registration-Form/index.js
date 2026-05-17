const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "student.html"));
});

app.post("/submit", (req, res) => {
    const fullName = req.body.fullName
    const email = req.body.email
    const age = parseInt(req.body.age)
    const course = req.body.course
    const mobile = req.body.mobile

    let info = null;


    if(mobile.length !== 10 || fullName.length === 0 || email.length === 0){
        res.sendFile(path.join(__dirname, "public", "invalid.html"))
    }

    else{
        if(age > 18)
            info = "Adult"
        else
            info = "Child"
        
        res.render("dashboard", {fullName, email, age, course, mobile, info});
    }
});

app.listen(3000, () => {
    console.log("Server running at 3000 port");
});