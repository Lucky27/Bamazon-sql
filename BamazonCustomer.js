var inquirer = require("inquirer");
var mysql = require ("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "carlo",
	database: "topsongsDB"
})

connection.connect(function(err) {
	if (err) {throw err};
	// start();
});

// function start(){
	inquirer.prompt([
  {
	name: "buy",
	type: "input",
	message: "What is the ID you like to purchase?",
	choices: ["HENNESY","BAILEYS"]
  },
])
	.then(function(answer){
 if(answer.buy.toUpperCase() === "HENNESY") {
 	hennesy();
 };
});

function hennesy(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

















