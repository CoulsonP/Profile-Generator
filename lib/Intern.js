const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
            this.school = school
        
    }
    getschool(){
        return this.school
    }
    gitRole(){
        return "Intern"
    }
}
module.exports = Intern