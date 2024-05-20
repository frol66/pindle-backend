const  usersRouter = require("express").Router(); 

const { findAllUsers, createUser, deleteUser } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserDeleted } = require('../controllers/users')

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", 
//findAllUsers, 
createUser, 
sendUserCreated);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;