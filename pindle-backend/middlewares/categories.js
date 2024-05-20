const categories = require('../models/categories');

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
};

const findCategoryById = async (req, res, next) => {
    console.log("GET /categories/:id");
    try {
        req.category = await categories.findById(req.params.id);
        next();
    }
    catch(e) {
        res.status(404).send({message: "Category not found"});
    }
};

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        console.log(req.body);
        req.category = await categories.create(req.body);
        next();
    }
    catch {
        res.status(404).send({message: "Error creating category"});
    }
};

const deleteCategory = async (req, res, next) => {
    console.log("POST /games");
    try {
        req.category = await categories.findByIdAndDelete(req.params.id);
        next();
    }
    catch {
        res.status(404).send({message: "Error deleting category"});
    }
};


module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    deleteCategory,
}