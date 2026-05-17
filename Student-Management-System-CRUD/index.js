const express = require('express');
const app = express();
const path = require('path');
const students = [];

const add_students = require('./routes/add-students');
const view_students = require('./routes/view-students');
const delete_students = require('./routes/delete-students');
const update_students = require('./routes/update-students');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.use('/add-students', (req, res, next) => {
    req.students = students;
    next();
}, add_students);

app.use('/view-students', (req, res, next) => {
    req.students = students;
    next();
}, view_students);

app.use('/delete-students', (req, res, next) => {
    req.students = students;
    next();
}, delete_students);


app.use('/update-students', (req, res, next) => {
    req.students = students;
    next();
}, update_students);

app.listen(3000, () => {
    console.log('Server running at 3000 port');
});