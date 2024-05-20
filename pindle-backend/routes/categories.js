const categoriesRouter = require("express").Router(); 

const { sendAllCategories, sendCategoryCreated, sendCategoryDeleted } = require("../controllers/categories");
const { findAllCategories, createCategory, deleteCategory } = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", 
//findAllCategories,
createCategory, 
sendCategoryCreated);


categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;