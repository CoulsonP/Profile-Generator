const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const fs = require("fs")
const inquirer = require("inquirer")
const teamArray = []

const coulson = new Engineer("name", 1, "cporte@gmail.com", "CoulsonP")
console.log(coulson)