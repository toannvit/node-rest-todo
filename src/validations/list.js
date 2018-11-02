const Joi = require('joi');
module.exports = {
    createList: {
        body: {
            name: Joi.string().required()
        }
    }
}