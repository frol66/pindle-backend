const users = require('../models/user');
const bcrypt = require("bcryptjs");

const hashPassword = async (req, res, next) => {
    try {
        const salt = await bcrypt.getSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        next();
    }
    catch(e) {
        res.status(400).send({message: "Ошибка хеширования пароля"});
    }
}

const findAllUsers = async (req, res, next) => {
    //req.usersArray = await users.find({});
    req.usersArray = await users.find({}, { password: 0 });
    next();
};

const findUserById = async (req, res, next) => {
    console.log("GET /users/:id");
    try {
        //req.user = await users.findById(req.params.id);
        req.user = await users.findById(req.params.id, { password: 0 });
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

const updateUser = async (req, res, next) => {
    try {
        req.user = await users.findByIdAndUpdate(req.params.id, req.body);
        next();
    }
    catch(e) {
        res.status(400).send({message: "User not updated"});
    }
};

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
    } else {
        next();
    }
};

const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
    } else {
        qnext();
    }
};

const checkIsUserExists = async (req, res, next) => {
    const isInArray = req.usersArray.find((user) => {
        return req.body.email === user.email;
    });
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Пользователь с таким email уже существует" }));
    } else {
        next();
    }
};

const checkIfUsersAreSafe = async (req, res, next) => {
    if (!req.body.users) {
        next();
        return;
    }
    if (req.body.users.length - 1 === req.game.users.length) {
        next();
        return;
    } else {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
    }
};

module.exports = { 
    findAllUsers, 
    findUserById,
    createUser,
    deleteUser,
    updateUser,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,
    checkIfUsersAreSafe,
    hashPassword,
};