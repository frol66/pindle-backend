const mongoose = require('mongoose');
const userModel = require('./user');
const categoryModel = require('./categories');
const bcrypt = require("bcryptjs");

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel,
    }],
});

gameSchema.statics.findGameByCategory = function(category) {
    return this.find({}) // Выполним поиск всех игр
        .populate({
        path: "categories",
        match: { name: category } 
        })
        .populate({
        path: "users",
        select: "-password"
        })
        .then(games => {
          // Отфильтруем по наличию искомой категории 
        return games.filter(game => game.categories.length > 0);
    });
}; 

const games = mongoose.model('game', gameSchema);

module.exports = games;