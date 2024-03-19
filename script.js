// Write your JavaScript code here!

////task 3
window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      // console.log(listedPlanets);
    })
    .then(function () {
      // console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets);
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });

  ////task 2
  const submitButton = document.querySelector("#formSubmit");

  submitButton.addEventListener("click", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get form input values
    let pilot = document.querySelector("#pilotName").value;
    let copilot = document.querySelector("input[name='copilotName']").value;
    let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
    let cargoMass = document.querySelector("input[name='cargoMass']").value;
    let list = document.getElementById("faultyItems"); // Retrieve the list element

    // Validate form inputs
    if (!validateFormInputs(pilot, copilot, fuelLevel, cargoMass)) {
      return; // Stop further execution if validation fails
    }

    // Call formSubmission function to validate
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  });
});
