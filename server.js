var express= require("express");
var bodyParser = require("body-parser")
var path = require("path");
var fs =require("fs");
var app = express();



var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/static/", express.static(path.join(__dirname + 'app/public')));
app.use("/public", express.static(path.join(__dirname + 'app/public')));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
    console.log("listening on http://localhost:" + PORT);
})