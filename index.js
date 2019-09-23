var express = require("express");
var parse = require("body-parser");
var router = require("./routes/routes")
var app = express();
router(app)
app.use(parse.json());
app.use(parse.urlencoded({extended: true}));
var server = app.listen(5000,_=>{
    console.log(`Server running on port: ${server.address().port}`)
})