// Load the NPM Package inquirer
var inquirer = require("inquirer");

function basicCard (front, back) {

    this.front = front;
    this.back = back;
};

var q1 = new basicCard ("1. The Chihuahua is a breed of dog believed to originate from what country?", "Mexico");
var q2 = new basicCard ("2. The first McDonald's restaurant openend in which U.S. state?", "California");
var q3 = new basicCard ("3. What is the name of the actress who plays Hermione Granger in the Harry Potter series of films?", "Emma Watson");
var q4 = new basicCard ("4. Which book was famously rejected by 12 publishers before finally being accepted by Bloomsbury?", "Harry Potter");

console.log(q1);
var rightAnswer = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
 
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "answer1",
        message: q1.front
      }, {
        name: "answer2",
        message: q2.front
      }, {
        name: "answer3",
        message: q3.front
      }, {
        name: "answer4",
        message: q4.front
      }
    ]).then(function(answers) {
    	if (answers.answer1 === q1.back) {
        	console.log("Correct!");
        	rightAnswer ++;
    	} else {
        	console.log("Wrong, the answer is " + q1.back)
    	}

    	if (answers.answer2 === q2.back) {
        	console.log("Correct!");
        	rightAnswer ++;
    	} else {
        	console.log("Wrong, the answer is " + q2.back);
    }

    if (answers.answer3 === q3.back) {
        console.log("Correct!");
        	rightAnswer ++;
    } else {
        console.log("Wrong, the answer is " + q3.back)
    }

    if (answers.answer4 === q4.back) {
        console.log("Correct!");
        	rightAnswer ++;
    } else {
        console.log("Wrong, the answer is " + q4.back)
    }
    console.log("Overall score is " + rightAnswer);
    });
	
}

askQuestion();