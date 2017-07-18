var inquirer = require("inquirer");

var basicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

inquirer.prompt([{
    type: 'input',
    name: "response",
    message: "Please enter 'Basic' or 'Cloze'"
}]).then(function(user) {
	if (user.response === "Basic"){
		askQuestionBasic();
	} else
	{
		askQuestionCloze();
	}

});
//Looks like the main.js is not working!! I don't know how to call the function from BasicCard.js and ClozeCard.js

//Both BasicCard.js and ClozeCard.js is working