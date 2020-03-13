const   express = require("express"),
        router = express.Router(),
        Category = require("../models/category");

// CATEGORIES - INDEX

router.get("/", async (req, res) => {
    // Get all categories and respective items from DB
    try {
        let allCategories = await Category.find({}).populate("items");
        res.render("categories/index", {categories: allCategories});
    } catch(err) {
        console.log(err);
    }
});

// CATEGORIES - NEW
router.get("/new",(req, res) => {
    res.render("categories/new")
});

// CATEGORIES - CREATE
router.post("/", async (req, res) => {
    try {
        await Category.create(req.body.category);
        res.redirect("/categories");
    } catch (err) {
        console.log(err);
    }
});

// CATEGORIES - EDIT

router.get("/:id/edit", async (req, res) => {
    try {
        let foundCategory = await Category.findById(req.params.id);
        res.render("categories/edit", {category: foundCategory});
    } catch(err) {
        res.redirect("/categories");
    }
});

// CATEGORIES - UPDATE
router.put("/:id", async (req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, req.body.category);
        res.redirect("/categories");
    } catch(err) {
        res.redirect("/categories");
    }
});

// CATEGORIES - UPDATE-ALL
router.put("/update-all", async (req, res) => {
    try {
        res.render("reached");
    } catch(err) {
        res.redirect("/categories");
    }
});

// CATEGORIES - DESTROY
router.delete("/:id", async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.id);
        res.redirect("/categories");
    } catch(err){
        res.redirect("/categories");
    }
});

// CATEGORIES - SHOW DETAILS
router.get("/:id", async (req, res) => {
	try {
        let foundCategory = await Category.findById(req.params.id);
        res.render("categories/show", {category: foundCategory});
    } catch(err) {
        res.redirect("/categories");
    }
});

module.exports = router;