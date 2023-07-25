const Router = require('express');
const router = new Router();

const employeesRouter = require('./employeesRouter');
const officePlanRouter = require('./officePlanRouter');

router.use('/employees', employeesRouter);
router.use('/officePlan', officePlanRouter);

module.exports = router;
