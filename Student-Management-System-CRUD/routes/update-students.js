const expreqss = require('express');
const router = expreqss.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('update-students', { students: req.students });
});


router.post('/', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const grade = req.body.grade;
    const student = req.students.find(student => student.id === id);
    if (student) {
        student.name = name;
        student.grade = grade;
    }
    
    res.redirect('/view-students');
});

module.exports = router;