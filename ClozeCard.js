// Load the NPM Package inquirer
var inquirer = require("inquirer");
var array = []; //declare empty array

function clozeCard (partial, cloze, fullText) {

   
    this.partial = partial;
    this.cloze = cloze;
    this.fullText = fullText;

};

var q1 = new clozeCard ("1. The Chihuahua is a breed of dog believed to originate from ...?", "Mexico", "The Chihuahua is a breed of dog believed to originate from Mexico");
var q2 = new clozeCard ("2. The first McDonald's restaurant openend in which U.S. state of ...?", "California", "The first McDonald's restaurant openend in which U.S. state of California");
var q3 = new clozeCard ("3. ... is the actress who plays Hermione Granger in the Harry Potter series of films?", "Emma Watson", "Emma Watson is the actress who plays Hermione Granger in the Harry Potter series of films");
var q4 = new clozeCard ("4. The book, ..., was famously rejected by 12 publishers before finally being accepted by Bloomsbury?", "Harry Potter", "The book, Harry Potter, was famously rejected by 12 publishers before finally being accepted by Bloomsbury");

array.push(q1, q2, q3, q4); //push objects to the empty array


//Declare valables for recursion function
var counter = 0; //counter for recursion function
function askQuestionCloze() {
    if (counter <= array.length-1){
        inquirer.prompt([
          {
            type: "input",
            name: "response",
            message: array[counter].partial +"\nAnswer:"
          }
        ]).then(function(answers) {
                if (answers.response === array[counter].cloze){
                    console.log("You got it right!");
                } else {
                    console.log("Wrong answer!!"+"\nThe right answer is: " + array[counter].fullText);
                }
            counter++;
            askQuestionCloze();                
            });
    }
    else {
        console.log("\nAll questions asked");
    }
};

askQuestionCloze();

