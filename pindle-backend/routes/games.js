const gamesRouter = require("express").Router(); 

const {findAllGames, createGame, deleteGame, findGameById, updateGame, checkEmptyTitle,} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameDeleted, sendGameUpdated} = require('../controllers/games');

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", 
//findAllGames, 
checkEmptyTitle,
createGame, 
sendGameCreated);


gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

gamesRouter.put("/games/:id", 
//findGameById,

checkEmptyTitle,
updateGame, 
sendGameUpdated);

module.exports = gamesRouter;