const userModel = require('../Models/user');
const { default: mongoose } = require('mongoose');

async function getAllUsers(req, res, next) {
    try {

        let response = await userModel.find({});
        res.json(response);

    } catch (error) {
        res.status(500).json(error);
    }
}

async function createUser(req, res, next) {
    //fetch info from request body
    try {
        console.log("req.body", req.body);
        let userDetail = req.body;
        let response = await userModel.insertMany([userDetail]);
        res.json(response);

    } catch (error) {
        res.json(error);
    }
}

async function deleteUser(req, res, next) {
    let userId = req.params.userId;
    let response = await userModel.deleteOne({ userId: userId });
    res.json(response);
}

function saveImage(req, res, next) {
    console.log("Request file", req.file)
    res.json({
        "message": "Image saved",
        path: req.file.path
    })
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    saveImage
}


