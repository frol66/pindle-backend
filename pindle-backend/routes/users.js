const  usersRouter = require("express").Router(); 

const { findAllUsers, createUser, deleteUser, updateUser, } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserDeleted, sendUserUpdated } = require('../controllers/users')

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", 
//findAllUsers, 
createUser, 
sendUserCreated);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

usersRouter.put("/users/:id", updateUser, sendUserUpdated);

module.exports = usersRouter;