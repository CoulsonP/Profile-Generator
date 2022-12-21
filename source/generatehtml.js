const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

function employeeCards(teamArray) {
let newArray = []

function managerCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getRole()}</h5>
    <p class="card-text">${employee.getName()}</p>
    <a href="#" class="btn btn-primary">${employee.getEmail()}</a>
    <a href="#" class="btn btn-primary">${employee.getofficeNumber()}</a>
  </div>
</div>
    `
}
function EngineerCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getRole()}</h5>
    <p class="card-text">${employee.getName()}</p>
    <a href="mailto:${employee.getEmail()}" class="btn btn-primary">${employee.getEmail()}</a>
    <a href="#" class="btn btn-primary">${employee.getGithub()}</a>
  </div>
</div>
    `
}
function InternCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getRole()}</h5>
    <p class="card-text">${employee.getName()}</p>
    <a href="#" class="btn btn-primary">${employee.getEmail()}</a>
    <a href="#" class="btn btn-primary">${employee.getSchool()}</a>
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

  ${employeeCards(teamArray)}
  </body>
</html>
    
    
    
    `
}