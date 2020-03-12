const 	express 		= require("express"),
		app 			= express(),
		bodyParser 	 	= require("body-parser"),
		mongoose 		= require("mongoose"),
		passport 		= require("passport"),
		LocalStrategy	= require("passport-local"),
		methodOverride = require("method-override"),
		port 			= 3000,
		// Schemas
		Category 		= require("./models/category"),
		Item			= require("./models/item"),
		User			= require("./models/user"),
		// Routes
		indexRoutes 	= require("./routes/index"),
	  	categoryRoutes 	= require("./routes/categories"),
	  	itemRoutes 		= require("./routes/items");


mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/cloficient", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


// Use Routes
app.use("/", indexRoutes);
app.use("/categories", categoryRoutes);
app.use("/categories/:id/items", itemRoutes);


app.listen(port, ()=> {
	console.log("Testing it has connected");
});