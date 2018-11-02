const express = require('express');
const actions = require('./list.actions');
const router = express.Router();


router.get('/' , actions.v1.getList);

router.get('/:listId' , actions.v1.getListByID);

router.post('/' , actions.v1.createList);
router.patch('/:listId' , actions.v1.updateList);

router.delete('/:listId' , actions.v1.deleteList);

router.use('/:listId/todos', require('./todos/todos.routes'));

module.exports = router;