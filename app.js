var express = require("express");
var expressLayouts = require("express-ejs-layouts");
var indexRouter = require('./routes/index.js');
var aboutRouter = require('./routes/about.js');
var dishesRouter = require('./routes/dishes.js');

//app setup
var app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(expressLayouts);

//Routes
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/dishes", dishesRouter);

app.listen(3000, () => {
    console.log('Express is running on port 3000')
});