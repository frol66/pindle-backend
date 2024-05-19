const categoriesRouter = require("express").Router(); 

const sendAllCategories = require("../controllers/categories");
const findAllCategories = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

module.exports = categoriesRouter;