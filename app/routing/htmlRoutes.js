var express= require("express");
var bodyParser = require("body-parser")
var path = require("path");
var fs =require("fs");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
console.log(_dirname);

app/get("/survey", function(req, res){
    res.sendFile(path.join(_dirname, "./survey.html"))
})
app.get("/"), function(req, res){
    res.sendFile(path.join(__dirname, "./home.html"))
}