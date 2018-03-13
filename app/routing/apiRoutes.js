// var express= require("express");
// var fs = require('fs')
var path = require('path')
// var bodyParser= require("body-parser")
// var app = express()
var friends = require("../data/friends.js")
// console.log("api Route")
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends.friends)
    })
    app.post("/api/friends", function(req,res){
        // receive the the user input and store is in the friends database
        var posted = req.body
        friends.friends.push(posted)
        // console.log(posted)
        var newFriend = friends.friends[friends.friends.length-1]
        // console.log(newFriend.scores)
        // Find the friend match
        var scoreDifference=[];
        // function to subtract arrays and create a new one with the result    
        function subtract(arr1, arr2) {
            return arr2.map(function (el, i) {
              return Math.abs(el - arr1[i]);
            });
        }
        // looping the array subtraction function
        for(var i = 0; i<friends.friends.length-1; i++){
            var x = subtract(friends.friends[i].scores, newFriend.scores).reduce(add, 0)
            function add(a,b){
                return a+b;
            }
            scoreDifference.push(x);
        }
        console.log(scoreDifference);
        // ----------------------------------------
        // Send the friend match back to the client
        // res.send(friends.friends[friends.friends.length-1])
  
    })
}
