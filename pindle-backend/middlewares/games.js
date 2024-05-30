const games = require('../models/game');


const findAllGames = async (req, res, next) => {
    req.gamesArray = await games
        .find({})
        .populate("categories")
        .populate({path: "users", select: "-password"});
    next();
};

const findGameById = async (req, res, next) => {
    try {
        req.gamesArray = await games
            .findById(req.params.id)
            .populate("categories")
            .populate("users");
        next();
    }
    catch(e) {
        res.status(404).send({message: "Game not found"});
    }
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

const updateGame = async (req, res, next) => {
    try {
        req.game = await games.findByIdAndUpdate(req.params.id, req.body);
        next();
    }
    catch(e) {
        res.status(400).send({message: "Game not updated"});
    }
};

const checkEmptyTitle = async (req,res,next) => {
    if(!req.body.title) {
        res.status(400).send({message: "Введите название игры"});
    }
    else {
        next();
    }
};

const checkIsVoteRequest = async (req, res, next) => {
    // Если в запросе присылают только поле users
    if (Object.keys(req.body).length === 1 && req.body.users) {
    req.isVoteRequest = true;
    }
next();
}; 

const checkEmptyFields = async (req, res, next) => {
    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.image ||
        !req.body.link ||
        !req.body.developer
    ) {
        res.setHeader("Content-Type", "application/json");
            res.status(400).send(JSON.stringify({ message: "Заполните все поля" }));
    } else {
        next();
    }
}; 

const checkIsGameExists = async (req, res, next) => {
    const isInArray = req.gamesArray.find((game) => {
        return req.body.title === game.title;
    });
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
            res.status(400).send(JSON.stringify({ message: "Игра с таким названием уже существует" }));
    } else {
        next();
    }
};

module.exports = {
    checkEmptyFields,
    findAllGames,
    createGame,
    deleteGame,
    findGameById,
    updateGame,
    checkEmptyTitle,
    checkIsVoteRequest,
    checkIsGameExists,
};