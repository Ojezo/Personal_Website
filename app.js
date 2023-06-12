const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/experiences", function(req, res){
    res.sendFile(__dirname + "/experiences.html");
})

app.get("/skills", function(req, res){
    res.sendFile(__dirname + "/skills.html");
})

app.get("/hobbies", function(req, res){
    res.sendFile(__dirname + "/hobbies.html");
})

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/contact.html");
})




app.listen(3000, function(){
    console.log("Server is running on port 3000");
})