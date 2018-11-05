

const express = require('express');
const router = express.Router();


router.use('/todos', require('./todos/todos.routes'));

router.use('/events', require('./events/events.routes'));

router.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
module.exports = router;