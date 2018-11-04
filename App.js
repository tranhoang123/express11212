var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var register = require("./routes/register");
var signin = require("./routes/signin");
var person = require("./routes/person");
var session = require('express-session');

app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(express.static('public'));
app.use("/register", register);
app.use("/signin", signin);
app.use("/person", person);
app.get("/", function(req,res){
	res.render("homepage");
});
app.post('/', function(req, res){
   console.log(req.body);
   // console.log(req.cookie);
   res.send("recieved your request!");
});


http.createServer(app).listen(3000);