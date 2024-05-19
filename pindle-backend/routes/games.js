/*
const { sendAllGames, sendUpdateGames } = require("../controllers/games");
const { findGameById, deleteGame, getAllGames, updateGamesFile, checkIstitleInArray, updateGamesArray} = require("../middlewares/games");
*/
const gamesRouter = require("express").Router(); 

gamesRouter.get("/games", (req, res) => {} );


module.exports = gamesRouter;