const  usersRouter = require("express").Router(); 

const { findAllUsers, findUserById, createUser, deleteUser, updateUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, hashPassword, } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserDeleted, sendUserUpdated, sendUserById, sendMe } = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post("/users", 
checkIsUserExists,
checkEmptyNameAndEmailAndPassword,
checkAuth,
hashPassword,
createUser, 
sendUserCreated);

usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);

usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

usersRouter.put("/users/:id", 
checkEmptyNameAndEmail,
checkAuth,
updateUser, 
sendUserUpdated);

module.exports = usersRouter;