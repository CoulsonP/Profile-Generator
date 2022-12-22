const Manager = require("../lib/Manager")

describe("Manager", () => {

it("should accept a office number argument", () => {
    exampleofficeNumber = "1"
 
    const result = new Manager("Coulson", '123', 'coulsonp@icloud.com', exampleofficeNumber)
    
    expect(result.officeNumber).toEqual(exampleofficeNumber);

   });

   it("getofficeNumber() should return office number", () => {
   
    exampleofficeNumber = "1"
 
     const result = new Manager('Coulson', '123', 'coulsonp@icloud.com', exampleofficeNumber)
  //insert method
     expect(result.getofficeNumber()).toEqual(exampleofficeNumber);
   });
});