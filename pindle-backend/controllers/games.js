const { readData, writeData } = require("../utils/data");






const sendAllGames = (req, res) => {
    res.send(req.games);
};

const sendUpdateGames = (req, res) => {
    res.send({
        games: req.games,
        updated: req.updatedObject,
    });
};



module.exports = {
    sendAllGames,
    sendUpdateGames,
}