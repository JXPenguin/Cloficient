const   express = require("express"),
        router = express.Router();
        
// Landing Page
router.get("/", (req, res) => {
	res.render("landing");
});

// Login Home Page
router.get("/home", (req, res) => {
	res.render("home");
});

// Summary Page
router.get("/summary", (req, res)=> {
	res.render("summary");
});

module.exports = router;