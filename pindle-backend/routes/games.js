const gamesRouter = require("express").Router(); 
const { checkAuth } = require("../middlewares/auth.js");

const {findAllGames, createGame, deleteGame, findGameById, updateGame, checkEmptyTitle, checkIsVoteRequest, checkEmptyFields, checkIsGameExists,} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameDeleted, sendGameUpdated, sendGameById} = require('../controllers/games');
const { checkIfCategoriesAvaliable } = require("../middlewares/categories.js");
const { checkIfUsersAreSafe } = require("../middlewares/users.js");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", 
findAllGames, 
checkIsGameExists,
checkIfCategoriesAvaliable,
checkEmptyFields,
createGame, 
sendGameCreated,
checkAuth);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

gamesRouter.put("/games/:id", 
findGameById,
checkIfUsersAreSafe,
checkIfCategoriesAvaliable,
checkEmptyFields,
//checkIsVoteRequest,
checkEmptyTitle,
updateGame, 
sendGameUpdated);

module.exports = gamesRouter;