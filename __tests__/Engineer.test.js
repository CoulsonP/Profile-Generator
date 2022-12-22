const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
  
it("should accept a Github argument", () => {
    exampleGithub = "CoulsonP"
 
    const result = new Engineer("Coulson", '123', 'coulsonp@icloud.com', exampleGithub)
    
    expect(result.github).toEqual(exampleGithub);

   });

   it("getGithub() should return Github", () => {
   
    exampleGithub = "CoulsonP"
 
     const result = new Engineer('Coulson', '123', 'coulsonp@icloud.com', exampleGithub)
  //insert method
     expect(result.getGithub()).toEqual(exampleGithub);
   });
});