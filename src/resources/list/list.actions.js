
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
    res.status(200).json({
        message:'Handling getList request'
    });
}

function getListByID(req, res, next) {
    res.status(200).json({
        message:'Handling getListByID request'
    });
}

function createList(req, res, next) {
    res.status(200).json({
        message:'Handling createList request'
    });
}

function updateList(req, res, next) {
    res.status(200).json({
        message:'Handling updateList request'
    });
}


function deleteList(req, res, next) {
    res.status(200).json({
        message:'Handling deleteList request'
    });
}


module.exports = actions;