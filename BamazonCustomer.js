
var inquirer = require("inquirer");
var mysql = require ("mysql");
var fs = require('fs');
var Table = require('cli-table');
var cart = [];

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "carlo",
	database: "bamazonDB"
})

connection.connect(function(err) {
	if (err) throw err;
	start();
});

function start(){
	connection.query("SELECT id, product_name, department_name, price, stock FROM products", function(err, res){
        if (err) throw err;

        var table = new Table({
          items: ['Item ID', 'Product name', 'Department', 'Price', 'Quantity'],
          width: [30, 30, 30, 30, 30]
        });
            // loop for items in the table.
            for(var i = 0; i < res.length; i++){
                table.push(
                [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock]
  
              );
            }

            console.log(table.toString());
            buy();
      });
}



function buy(){
	inquirer.prompt([
  {
	name: "buy",
	type: "input",
	message: "What is the ID you like to purchase?",
	// choices: ["HENNESY","BAILEYS"]
  }
  ]).then(function(answer){
	var purchaseItems = answer.buy;

    connection.query('SELECT * FROM Products WHERE id=?', purchaseItems, function(err, res){
       if(err)
       	console.log(err);
       	console.log(res);

       		inquirer.prompt([
       		 {
       		 	name: "quantity",
       		 	type: "input",
       		 	message: "How many would you like to purchase?"

       		 }
       		 ]).then(function(answer){
       		 	var quantity = answer.quantity;

       		 	if (quantity > res[0].stock){
       		 		console.log("No stock.");
       		 		buy();
       		 	}
       		 	else{
       		 		console.log("Thank you for your business. Total: " + quantity * res[0].price);

       		 		var newQuantity = res[0].stock - quantity;
       		 		connection.query("UPDATE products SET stock = " + newQuantity + "WHERE id = " + purchaseItems, function(err, res){
       		 			if (err) throw err;
       		 			console.log("Drink responsibly.", err);
       		 		})

       		 		inquirer.prompt([
       		 		  {
                  type: "list",
                  message: "Would you like to check out?",
                  choices: ["Yes", "No"],
       		 		  	name: "choice"

       		 		  }

       		 		]).then(function(answer){
       		 			if (err) throw err;

       		 			switch(answer.choice){
       		 				case "Yes":
       		 				start();
       		 				break;

       		 				// case "No":
       		 				// txt()
       		 				// // connection.end();
       		 				// break;

       		 				default:
       		 				console.log("invalid");
       		 			}
       		 		})
       		 	}
       		 })
 	   
   
   
 	    
	});

  });

};

// function txt(){
//     fs.readFile("txt.txt", "utf8", function(error, data) {
//         console.log(data);
//     });

// function vodka(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])


// function hennesy(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function bacardi(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function baileys(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function tanqueray(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function jackDaniel(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function ciroc(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function blackLabel(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function greyGoose(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function crownRoyal(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

// function joseCuervo(){
//   inquirer.prompt([
//   	{ 
//   	 name:"liquor",
//   	 type: "input",
//   	 message: "How many units would you like to buy?"
//   	}

//   ])
// };

















