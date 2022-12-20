const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
  // test description saying this should test if constructor creates and object

   //test for email next
it("should accept a Github argument", () => {
    exampleGithub = "CoulsonP"
 
    // new Employee instance with placeholder for name parameter for name then example id for id parameter
    //each successive test will require that place holders be present for other existing parameters in
    //you classes - so when you test for email the instance should be new Employee("Coulson", "123", exampleEmail)
    const result = new Engineer("Coulson", '123', 'coulsonp@icloud.com', exampleGithub)
    // We expect 'result' type to be and empty object
    expect(result.github).toEqual(exampleGithub);
//stuff
   });

   it("getGithub() should return Github", () => {
   
    exampleGithub = "CoulsonP"
 
     const result = new Engineer('Coulson', '123', 'coulsonp@icloud.com', exampleGithub)
  //insert method
     expect(result.getgithub()).toEqual(exampleGithub);
   });
});