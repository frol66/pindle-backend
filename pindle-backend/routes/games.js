const gamesRouter = require("express").Router(); 

const {findAllGames, createGame, deleteGame} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameDeleted} = require('../controllers/games');

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", 
//findAllGames, 
createGame, 
sendGameCreated);


gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);


module.exports = gamesRouter;