//var express= require("express");
var path = require("path");
// var fs = require('fs')
// var bodyParser= require("body-parser")
// var app = express();
console.log("html route")

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
module.exports = function(app){
  
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    });

    app.use( function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}

// app.get("/"), function(req, res){
//     res.sendFile(path.join(__dirname, "./home.html"))
// }

// app.listen(PORT, function(){
//     console.log("listeningon http://localhost:" + PORT);
// })ç