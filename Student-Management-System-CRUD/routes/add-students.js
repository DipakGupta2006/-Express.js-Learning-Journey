const expreqss = require('express');
const router = expreqss.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'add-students.html'));
});

router.post('/', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const grade = req.body.grade;

    const student = {
        id,
        name,
        grade
    };
    req.students.push(student);
    res.redirect('/');
});

module.exports = router;
