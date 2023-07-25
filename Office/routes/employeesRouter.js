const Router = require('express')
const router = new Router()
let employeesController = require('../controllers/employeesController')

router.get('/', employeesController.getAll);
router.get('/:id', employeesController.get);
router.post('/new', employeesController.registration);

module.exports = router;
