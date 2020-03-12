const   express = require("express"),
        router = express.Router({mergeParams: true}),
        Category = require("../models/category"),
        Item = require("../models/item");

// ITEMS - NEW ROUTE
router.get("/new", async (req, res) => {
	try {
        let category = await Category.findById(req.params.id);
        res.render("items/new", {category: category});
    } catch(err) {
        res.redirect("/categories");
    }
});

// ITEMS - CREATE ROUTE
router.post("/", async (req, res) => {
    try {
        let category = await Category.findById(req.params.id);
        let item = await Item.create(req.body.item);
        item.save();
        category.items.push(item);
        category.save();
        res.redirect("/categories");
    } catch(err) {
        res.redirect("/categories");
    }
})


// ITEMS - EDIT ROUTE
router.get("/:item_id/edit", async (req, res) => {
    try {
        let foundItem = await Item.findById(req.params.item_id);
        res.render("items/edit", {category_id: req.params.id, item: foundItem});
    } catch(err){
        res.redirect("/categories");
    }
});


// ITEMS - UPDATE ROUTE
router.put("/:item_id", async(req, res) => {
    try {
        await Item.findByIdAndUpdate(req.params.item_id, req.body.item);
        res.redirect("/categories");
    } catch(err) {
        res.redirect("/categories");
    }
});

// ITEMS - DESTROY ROUTE

router.delete("/:item_id", async(req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.item_id);
        res.redirect("/categories");
    } catch(err) {
        res.redirect("/categories");
    }
})

module.exports = router;