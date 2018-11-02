const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const listSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Number,
        default: 1
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
listSchema.plugin(timestamps);
module.exports = mongoose.model('List', listSchema);