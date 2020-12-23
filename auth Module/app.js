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
	password:'',
	database: 'ARS'
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
	console.log(req.body);
	// store all the user input data
  var userRegister=req.body;
	var type=req.body.type;
	console.log(type);
 
  // insert user data into users table
  var sql = 'INSERT INTO user SET ?';
  connection.query(sql, userRegister,function (err) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
	res.redirect("/");
});

app.post("/signin", function(req,res){
	console.log("signup successfull");
});

app.listen(3000, function(){
	console.log("server has started");
});