const gamesRouter = require("express").Router(); 
const { checkAuth } = require("../middlewares/auth.js");

const {findAllGames, createGame, deleteGame, findGameById, updateGame, checkEmptyTitle, checkIsVoteRequest,} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameDeleted, sendGameUpdated} = require('../controllers/games');

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", 
//findAllGames, 
checkEmptyTitle,
createGame, 
sendGameCreated,
checkAuth);


gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

gamesRouter.put("/games/:id", 
//findGameById,
//checkIsVoteRequest,
checkEmptyTitle,
updateGame, 
sendGameUpdated);

module.exports = gamesRouter;