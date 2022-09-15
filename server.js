//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true})) //needed for bodyparser


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); //const of the directory
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result is: " + result);
    
});



app.listen(3000,function(){
    console.log("Hello!!");
});