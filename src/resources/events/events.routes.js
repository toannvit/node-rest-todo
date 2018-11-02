const express = require('express');
const actions = require('./events.actions');
const router = express.Router();


router.get('/' , actions.v1.getList);

router.get('/:listId' , actions.v1.getListByID);

router.get('/:listId/:todoId' , actions.v1.getTodoByID);



module.exports = router;