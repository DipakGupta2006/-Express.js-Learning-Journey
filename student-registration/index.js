const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "student.html"))
});

app.post('/submit', (req, res) => {
    const stud_data = req.body;
    res.render("dashboard", { stud_data });

})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});