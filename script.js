// Write your JavaScript code here!

// Import the helper functions
const { formSubmission } = require("./scripthelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    });

  const submitButton = document.getElementById("formSubmit");

  submitButton.addEventListener("click", function (event) {
   
    //prevent default form submission behavior
    event.preventDefault();

    //get form input values
    let pilotName = document.getElementById("pilotName").value;
    let copilotName = document.getElementById("copilotName").value;
    let fuelLevel = document.getElementById("fuelLevel").value;
    let cargoMass = document.getElementById("cargoMass").value;
    let list = document.getElementById("faultyItems"); // Retrieve the list element

    //call formSubmission function to validate
    formSubmission(document,list, pilotName, copilotName, fuelLevel, cargoMass);
  });
});
