var express = require("express");
var indexRouter = require('./routes/index.js')

//app setup
var app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

//Routes
app.use("/", indexRouter);

app.listen(3000, () => {
    console.log('Express is running on port 3000')
});