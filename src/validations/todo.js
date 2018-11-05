const Joi = require('joi');
module.exports = {
    createTodo: {
        body: {
            name: Joi.string().required()
        }
    }
}