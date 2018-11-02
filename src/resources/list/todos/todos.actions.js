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
    res.status(200).json({
        message:'Handling getTodos request'
    });
}

function getTodoById(req, res, next) {
    res.status(200).json({
        message:'Handling getTodoById request'
    });
}

function createTodo(req, res, next) {
    res.status(200).json({
        message:'Handling createTodo request'
    });
}

function updateTodo(req, res, next) {
    res.status(200).json({
        message:'Handling updateTodo request'
    });
}


function deleteTodo(req, res, next) {
    res.status(200).json({
        message:'Handling updateTodo request'
    });
}

module.exports = actions;