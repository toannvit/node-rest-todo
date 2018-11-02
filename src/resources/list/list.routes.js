const express = require('express');
const validate = require('express-validation');
const validation = require('../../validations/list');
const actions = require('./list.actions');
const router = express.Router();


router.get('/' , actions.v1.getList);

router.get('/:listId' , actions.v1.getListByID);

router.post('/' , validate(validation.createList) , actions.v1.createList);

router.patch('/:listId' , actions.v1.updateList);

router.delete('/:listId' , actions.v1.deleteList);

router.use('/:listId/todos', require('./todos/todos.routes'));

module.exports = router;