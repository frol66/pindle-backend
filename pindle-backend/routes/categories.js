const categoriesRouter = require("express").Router(); 

const { sendAllCategories, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated, sendCategoryById } = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
const { findAllCategories, createCategory, deleteCategory, updateCategory, checkEmptyName, findCategoryById, } = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post("/categories", 
findAllCategories,
checkEmptyName,
createCategory, 
sendCategoryCreated);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);
categoriesRouter.put("/categories/:id", checkAuth, updateCategory, sendCategoryUpdated);


module.exports = categoriesRouter;