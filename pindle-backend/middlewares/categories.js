const categories = require('../models/categories');
const gamesRouter = require('../routes/games');

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

const updateCategory = async (req, res, next) => {
    try {
        req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
        next();
    }
    catch(e) {
        res.status(400).send({message: "Category not updated"});
    }
};



/*const checkEmptyName = async (req, res, next) => {
    if (!req.body.name) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите название категории" }));
    } else {
        next();
    }
};

const checkIsCategoryExists = async (req, res, next) => {
    const isInArray = req.categories.find((category) => {
        return req.body.name === category.name;
    });
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
    } else {
        next();
    }
};

const checkIfCategoriesAvaliable = async (req, res, next) => {
    if (!req.body.categories || req.body.categories.length === 0) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Выберите хотя бы одну категорию" }));
    } else {
        next();
    }
};
*/
module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    deleteCategory,
    updateCategory,
    /*
    checkEmptyName,
    checkIsCategoryExists,
    checkIfCategoriesAvaliable,
    */
}