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
        req.game = await games.create(req.body);
        next();
    }
    catch {
        res.status(404).send({message: "Error creating game"});
    }
};

const deleteGame = async (req, res, next) => {
    console.log("POST /games");
    try {
        req.game = await games.findByIdAndDelete(req.params.id);
        next();
    }
    catch {
        res.status(404).send({message: "Error deleting game"});
    }
};


module.exports = {
    findAllGames,
    createGame,
    deleteGame,
};