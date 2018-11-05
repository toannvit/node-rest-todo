const Todo = require('../../../models/todo');
const mongoose = require('mongoose');
const actions = {
    v1: {
        getTodos: getTodos,
        getTodoById: getTodoById,
        createTodo: createTodo,
        updateTodo: updateTodo,
        deleteTodo: deleteTodo
    }
}

function getTodos(req, res, next) {
    
    Todo.find({ status: { $gt: 0 }})
        .select('_id name description completed status')
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                items: docs
            })
        }).catch(error => {
            res.status(500).json({
                error
            });
    });
}

function getTodoById(req, res, next) {
    const todoId = req.params.todoId;
    Todo.findOne({ _id: todoId, status: { $gt: 0 } }).then(doc => {
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message: 'No valid entry found for provided ID' });
        }
    }).catch(error => {
        res.status(500).json({
            error
        });
    });
}

function createTodo(req, res, next) {
    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        list: doc._id,
        events: [
            {
                _id: new mongoose.Types.ObjectId(),
                name: 'todoCreated',
                when: new Date(),
            }
        ]
    });
    todo.save()
        .then(result => {
            res.status(201).json({
                createdResult: result
            });
        })
        .catch(error => {
            res.status(500).json({
                error
            });
    });
}

function updateTodo(req, res, next) {
    const todoId = req.params.todoId;

    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Todo.update({ _id: todoId }, {
        $set: updateOps,
        $push: {
            events: {
                _id: new mongoose.Types.ObjectId(),
                name: 'todoUpdated',
                when: new Date()
            }
        }
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            error
        });
    });
}


function deleteTodo(req, res, next) {
    const todoId = req.params.todoId;
    Todo.update({ _id: todoId, status: { $gt: 0 }}, {
        $set: {
            status: -2 //delete
        },
        $push: {
            events: {
                _id: new mongoose.Types.ObjectId(),
                name: 'toDoDeleted',
                when: new Date()
            }
        }
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            error
        });
    })
}

module.exports = actions;