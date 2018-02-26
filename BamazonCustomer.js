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

function vodka(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function hennesy(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function bacardi(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function baileys(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function tanqueray(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function jackDaniel(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function ciroc(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function blackLabel(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function greyGoose(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function crownRoyal(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

function joseCuervo(){
  inquirer.prompt([
  	{ 
  	 name:"liquor",
  	 type: "input",
  	 message: "How many units would you like to buy?"
  	}

  ])
};

















