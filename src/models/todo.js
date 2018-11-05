const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

const todoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: Number,
        default: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    events: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            name: {
                type: String,
                required: true,
                trim: true
            },
            when: Date,
        }
    ]
});
todoSchema.plugin(timestamps);
module.exports = mongoose.model('Todo', todoSchema);