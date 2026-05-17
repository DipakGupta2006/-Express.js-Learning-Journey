const expreqss = require('express');
const router = expreqss.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.render('view-students', { students: req.students });
});


module.exports = router;
