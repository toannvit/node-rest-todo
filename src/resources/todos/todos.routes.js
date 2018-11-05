const express = require('express');
const actions = require('./todos.actions');
const validate = require('express-validation');
const validation = require('../../validations/todo');
const router = express.Router();


router.get('/', actions.v1.getTodos);

router.get('/:todoId' , actions.v1.getTodoById);

router.post('/' ,validate(validation.createTodo), actions.v1.createTodo);

router.patch('/:todoId' , actions.v1.updateTodo);

router.delete('/:todoId' , actions.v1.deleteTodo);

module.exports = router;