var inquirer = require("inquirer");

function clozeCard (cloze, partial, fullText) {

    this.cloze = cloze;
    this.partial = partial;
    this.fullText = fullText;

};

var q1 = new basicCard ("Mexico", "1. The Chihuahua is a breed of dog believed to originate from ...?", "The Chihuahua is a breed of dog believed to originate from Mexico");
var q2 = new basicCard ("California", "2. The first McDonald's restaurant openend in which U.S. state of ...?", "The first McDonald's restaurant openend in which U.S. state of California");
var q3 = new basicCard ("Emma Watson", "3. ... is the actress who plays Hermione Granger in the Harry Potter series of films?", "Emma Watson is the actress who plays Hermione Granger in the Harry Potter series of films");
var q4 = new basicCard ("Harry Potter", "4. The book, ..., was famously rejected by 12 publishers before finally being accepted by Bloomsbury?", "The book, Harry Potter, was famously rejected by 12 publishers before finally being accepted by Bloomsbury");
