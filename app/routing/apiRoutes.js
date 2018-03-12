var express= require("express");
var fs = require('fs')
var path = require('path')
var bodyParser= require("body-parser")
var app = express()
var friends = require("../data/friends.js")
console.log("api Route")
console.log(friends.friends[0])

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends.friends)
    })
    app.post("/api/friends", function(req,res){
        var newFriend = req.body
        friends.push(newFriend)
    })
}
// console.log(__dirname)