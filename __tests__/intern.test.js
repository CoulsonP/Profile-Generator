const Intern = require("../lib/Intern")

describe("Intern", () => {

it("should accept a school argument", () => {
    exampleschool = "Vanderbilt"
 
    const result = new Intern("Coulson", '123', 'coulsonp@icloud.com', exampleschool)
    
    expect(result.school).toEqual(exampleschool);

   });

   it("getschool() should return school", () => {
   
    exampleschool = "Vanderbilt"
 
     const result = new Intern('Coulson', '123', 'coulsonp@icloud.com', exampleschool)
  //insert method
     expect(result.getSchool()).toEqual(exampleschool);
   });
});