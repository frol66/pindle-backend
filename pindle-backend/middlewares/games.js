const games = require('../models/game');

const findAllGames = async (req, res, next) => {
    req.gamesArray = await games
        .find({})
        .populate("categories")
        .populate("users");
    next();
};

const createGame = async (req, res, next) => {
    console.log("POST /games");
    try {
        console.log(req.body);
        req.game = await games.create(req.body);
        next();
    }
    catch {
        res.status(404).send({message: "Error creating game"});
    }
};

module.exports = {
    findAllGames,
    createGame,
};