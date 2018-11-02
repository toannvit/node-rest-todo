 const actions = {
    v1: {
        getList: getList,
        getListByID: getListByID,
        getTodoByID: getTodoByID
    }
}

function getList(req,res,next) {
    res.status(200).json({
        message:'Handling getListByID request'
    });
}

function getListByID (req,res,next) {
    res.status(200).json({
        message:'Handling getListByID request'
    });
}



function getTodoByID(req,res,next) {
    res.status(200).json({
        message:'Handling getTodoByID request'
    });
}

module.exports = actions;