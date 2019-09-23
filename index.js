var express = require("express");
var parse = require("body-parser");
var app = express();
app.use(parse.json());
app.use(parse.urlencoded({extended: true}));
var server = app.listen(5000,_=>{
    console.log(`Server running on port: ${server.address().port}`)
})