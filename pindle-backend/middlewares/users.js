const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
};

const findUserById = async (req, res, next) => {
    console.log("GET /users/:id");
    try {
        req.user = await users.findById(req.params.id);
        next();
    }
    catch(e) {
        res.status(404).send({message: "User not found"});
    }
};




const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
        console.log(req.body);
        req.user = await users.create(req.body);
        next();
    }
    catch {
        res.status(404).send({message: "Error creating user"});
    }
};


const deleteUser = async (req, res, next) => {
    console.log("POST /users");
    try {
        req.user = await users.findByIdAndDelete(req.params.id);
        next();
    }
    catch {
        res.status(404).send({message: "Error deleting user"});
    }
};

module.exports = { 
    findAllUsers, 
    findUserById,
    createUser,
    deleteUser,
};