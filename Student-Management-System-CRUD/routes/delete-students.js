const expreqss = require('express');
const router = expreqss.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('delete-students', { students: req.students });

});

router.post('/', (req, res) => {
    const id = req.body.id;
    const index = req.students.findIndex(student => student.id === id);
    if (index !== -1) {
        req.students.splice(index, 1);
    }
    res.redirect('/view-students');
});

module.exports = router;