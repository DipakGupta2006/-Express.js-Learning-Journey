const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"))
});


app.post("/submit", (req, res) => {
    const studentName = req.body.studentName;
    const rollNumber = req.body.rollNumber;
    const mathMarks = parseFloat(req.body.mathMarks);
    const scienceMarks = parseFloat(req.body.scienceMarks);
    const englishMarks = parseFloat(req.body.englishMarks);

    const total = mathMarks + scienceMarks + englishMarks;
    const percentage = (total/300) * 100;
    const grade = percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : percentage >= 60 ? 'D' : 'F';
    const passFail = percentage >= 60 ? 'Pass' : 'Fail';

    res.render('dashboard', {studentName, rollNumber, mathMarks, scienceMarks, englishMarks, total, percentage, grade, passFail});


});


app.listen(3000, () => {
    console.log("server is runnin in port 3000")
});