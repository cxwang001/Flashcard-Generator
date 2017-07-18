var inquirer = require("inquirer");

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

inquirer.prompt([{
    type: 'input',
    name: "response",
    message: "Please enter 'Basic' or 'Cloze'"
}]).then(function(user) {
	if (user.response=== "Basic"){
		BasicCard.askQuestionBasic();
	} else
	{
		ClozeCard.askQuestionCloze();
	}



});
