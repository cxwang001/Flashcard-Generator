// Load the NPM Package inquirer
var inquirer = require("inquirer");

function basicCard (front, back) {

    this.front = front;
    this.back = back;
};

//Building an array of objects for all question and answers
var array=[{
    "question": "1. The Chihuahua is a breed of dog believed to originate from what country?",
    "answer": "Mexico"
},
{
    "question": "2. The first McDonald's restaurant openend in which U.S. state?",
    "answer": "California"
},
{
    "question": "3. What is the name of the actress who plays Hermione Granger in the Harry Potter series of films?",
    "answer": "Emma Watson"
},
{
    "question": "4. Which book was famously rejected by 12 publishers before finally being accepted by Bloomsbury?",
    "answer": "Harry Potter"
}];

//Declare valables for recursion function
var counter = 0; //counter for recursion function
var rightAnswer = 0; //counter for right answers

function askQuestion() {
    if (counter <= array.length-1){
        inquirer.prompt([
          {
            type: "input",
            name: "response",
            message: array[counter].question +"\nAnswer:"
          }
        ]).then(function(answers) {
                if (answers.response === array[counter].answer){
                    console.log("You got it right!");
                    rightAnswer++;
                } else {
                    console.log("Wrong answer!!");
                }
            counter++;
            askQuestion();                
            });
    }
    else {
        console.log("All questions asked");
    }
    console.log("You got "+ rightAnswer +" correct!");
};

askQuestion();