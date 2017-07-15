// Load the NPM Package inquirer
var inquirer = require("inquirer");

function basicCard (front, back) {

    this.front = front;
    this.back = back;
};

var q1 = new basicCard