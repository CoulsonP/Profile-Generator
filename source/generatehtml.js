const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

function employeeCards(teamArray) {
let newArray = []

function managerCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getRole()}</h5>
    <p class="badge"> <span>${employee.getName()}</span> </p>
    <p href="#" class="managerID">Employee ID:${employee.getid()}</p>
    <a href="mailto:${employee.getEmail()}" class="managerEmail">Email:${employee.getEmail()}</a>
    <p href="#" class="managerSchool">Office Number:${employee.getofficeNumber()}</p>
  </div>
</div>
    `
}
function EngineerCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getRole()}</h5>
    <p class="badge"><span>${employee.getName()}</span> </p>
    <p href="#" class="engineerID">Employee ID:${employee.getid()}</p>
    <a href="mailto:${employee.getEmail()}" class="engineerEmail">Email:${employee.getEmail()}</a>
    <p href="#" class="engineerSchool">Github:${employee.getGithub()}</p>
  </div>
</div>
    `
}
function InternCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getRole()}</h5>
    <p class="badge"><span>${employee.getName()}</span> </p>
    <p href="#" class="internID">Employee ID:${employee.getid()}</p>
    <a href="mailto:${employee.getEmail()}" class="internEmail">Email:${employee.getEmail()}</a>
    <p href="#" class="internSchool">School:"${employee.getSchool()}</p>
  </div>
</div>
    `
}




teamArray.forEach(function(employee){
    if(employee.getRole()=== "Manager"){
        newArray.push(managerCard(employee))
    }else if(employee.getRole()=== "Engineer"){
        newArray.push(EngineerCard(employee))
    }else if(employee.getRole()=== "Intern"){
        newArray.push(InternCard(employee))
    }
})

return newArray.join("")
}


module.exports = teamArray => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <!-- Link for stylesheet -->
    <link rel="stylesheet" href="./style.css" />
    <title>Work Day Scheduler</title>
  </head>

  <body>
<h1>My Team</h1>
  ${employeeCards(teamArray)}
  </body>
</html>
    
    
    
    `
}