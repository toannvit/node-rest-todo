const express = require('express');
const actions = require('./events.actions');
const router = express.Router();


router.get('/' , actions.v1.getTodoEvents);

router.get('/:todoId' , actions.v1.getTodoEventByID);

module.exports = router;