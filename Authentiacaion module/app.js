var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require('body-parser');

app.use(express.static("css"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:''
});

connection.connect(function(err){
	if(err){
		console.log("error connecting database");
	}else{
		console.log("connected..");
	}
});


app.get("/", function(req, res){
	res.render("login");
});

app.post("/user/add", function(req,res){
	
});


app.listen(3000, function(){
	console.log("server has started");
});