const express = require('express');
const actions = require('./todos.actions');
const router = express.Router();


router.get('/', actions.v1.getTodos);

router.get('/:todoId' , actions.v1.getTodoById);

router.post('/' , actions.v1.createTodo);

router.patch('/:todoId' , actions.v1.updateTodo);

router.delete('/:todoId' , actions.v1.deleteTodo);

module.exports = router;