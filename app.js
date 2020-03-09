const 	express = require("express"),
		app 	= express();

// Routes

app.get("/", (req, res) => {
	res.render("landing");
});

app.listen(process.env.PORT, ()=> {
	console.log("Testing it has connected");
});