const gamesRouter = require("express").Router(); 
const { checkAuth } = require("../middlewares/auth.js");

const {findAllGames, createGame, deleteGame, findGameById, updateGame, checkEmptyTitle, checkIsVoteRequest, checkEmptyFields,} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameDeleted, sendGameUpdated, sendGameById} = require('../controllers/games');

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", 
findAllGames, 
checkEmptyFields,
checkEmptyTitle,
createGame, 
sendGameCreated,
checkAuth);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

gamesRouter.put("/games/:id", 
checkEmptyFields,
findGameById,
//checkIsVoteRequest,
checkEmptyTitle,
updateGame, 
sendGameUpdated);

module.exports = gamesRouter;