const Todo = require('../../models/todo');

const actions = {
    v1: {
        getTodoEvents: getTodoEvents,
        getTodoEventByID: getTodoEventByID
    }
}

function getTodoEvents(req,res,next) {
    Todo.find({ status: { $gt: 0 } })
    .select('_id name events')
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

function getTodoEventByID (req,res,next) {
    const id = req.params.todoId;
    Todo.findOne({_id: id, status: { $gt: 0 } })
    .select('_id name events')
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



function getTodoByID(req,res,next) {
    const listId = req.params.listId;
    const todoId = req.params.todoId;
    Todo.findOne({ _id: todoId, list: listId, status: { $gt: 0 } })
    .select('_id name events')
    .then(doc => {
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

module.exports = actions;