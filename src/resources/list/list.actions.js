const List = require('../../models/list');
const mongoose = require('mongoose');
const actions = {
    v1: {
        getList: getList,
        getListByID: getListByID,
        createList: createList,
        updateList: updateList,
        deleteList: deleteList
    }
}

function getList(req, res, next) {
    List.find({ status: { $gt: 0 } })
    .select('_id name status')
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

function getListByID(req, res, next) {
    const id = req.params.listId;
    List.findOne({ _id: id, status: { $gt: 0 } }).then(doc => {
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

function createList(req, res, next) {
    const list = new List({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        events: [
            {
                _id: new mongoose.Types.ObjectId(),
                name: 'listCreated',
                when: new Date(),
            }
        ]
    });
    list.save().then(doc => {
        res.status(201).json({
            createdResult: doc,
            links: {
                type: 'GET',
                href: ''
            }
        })
    }).catch(err => {
        res.status(500).json({
            error
        });
    });

}

function updateList(req, res, next) {
    const id = req.params.listId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    List.update({ _id: id }, {
        $set: updateOps,
        $push: {
            events: {
                _id: new mongoose.Types.ObjectId(),
                name: 'listUpdated',
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


function deleteList(req, res, next) {
    const id = req.params.listId;
    List.update({ _id: id }, {
        $set: {
            status: -2 //delete
        },
        $push: {
            events: {
                _id: new mongoose.Types.ObjectId(),
                name: 'listDeleted',
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