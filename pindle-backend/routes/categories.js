const categoriesRouter = require("express").Router(); 

const { sendAllCategories, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated } = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
const { findAllCategories, createCategory, deleteCategory, updateCategory, } = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", 
createCategory, 
sendCategoryCreated);


categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);
categoriesRouter.put("/categories/:id", checkAuth, updateCategory, sendCategoryUpdated);


module.exports = categoriesRouter;