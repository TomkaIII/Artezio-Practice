const Router = require('express');
const officePlanController = require('../controllers/officePlanController');
const router = new Router();

router.get('/',officePlanController.getAll);
router.get('/:worksplace',officePlanController.get);

module.exports = router;
