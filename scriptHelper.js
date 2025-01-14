// Write your helper functions here!

require("cross-fetch/polyfill");

////task 3
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const missionTarget = document.getElementById("missionTarget");

  // Construct the HTML structure
  missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
          <li>Name: ${name} </li>
          <li>Diameter: ${diameter}</li>
          <li>Star: ${star}</li>
          <li>Distance from Earth: ${distance} </li>
          <li>Number of Moons: ${moons}</li>
      </ol>
      <img src="${imageUrl}">
    `;
}

function validateInput(input) {
  if (isNaN(input)) {
    return "Not a Number";
  } else if (input === "") {
    return "Empty";
  } else {
    return "Is a Number";
  }
}

function validateFormInputs(pilot, copilot, fuelLevel, cargoMass) {
  // Check if form fields are empty
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    alert("All fields are required!");
    return; // Exit early if any field is empty
  }

  // Validate pilot and copilot names using validateInput function
  if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number"
  ) {
    alert("Please enter  valid names for Pilot and Co-pilot.");
    return; // Stop further execution
  }
  // Validate other input values using validateInput function
  if (
    validateInput(fuelLevel) !== "Is a Number" ||
    validateInput(cargoMass) !== "Is a Number"
  ) {
    alert("Please enter valid numbers for Fuel Level and Cargo Mass.");
    return; // Stop further execution
  }

  //All validations passed
  return true;
}

////Abstractor and Dryness function
function isANumber(value) {
  let parsedValue = parseFloat(value);
  return !isNaN(parsedValue) && isFinite(parsedValue);
}

function formSubmission(document, faultyItems, pilotName, coPilotName, fuelLevel, cargoMass) {
  
  let pilotStatus = `Pilot ${pilotName} is ready for launch`;
  let coPilotStatus = `Co-pilot ${coPilotName} is ready for launch`;
  
  let fuelLevelStatus =
    fuelLevel >= 10000
      ? "Fuel level high enough for launch"
      : "Fuel level too low for launch";
  let cargoMassStatus =
    cargoMass <= 10000
      ? "Cargo mass low enough for launch"
      : "Cargo mass too heavy for launch";

  // Update pilot status
  document.getElementById("pilotStatus").textContent = pilotStatus.toString();

  // Update co-pilot status
  document.getElementById("copilotStatus").textContent =
    coPilotStatus.toString();

  // Update fuel status
  document.getElementById("fuelStatus").textContent = fuelLevelStatus;

  // Update cargo status
  document.getElementById("cargoStatus").textContent = cargoMassStatus;

  // Determine if the shuttle is ready for launch
  let isShuttleReady =
    pilotStatus.includes("ready") &&
    coPilotStatus.includes("ready") &&
    fuelLevelStatus.includes("high enough") &&
    cargoMassStatus.includes("low enough");

  // Update launch status text and color
  const launchStatus = document.getElementById("launchStatus");
  launchStatus.textContent = isShuttleReady
    ? "Shuttle is Ready for Launch"
    : "Shuttle Not Ready for Launch";
  launchStatus.style.color = isShuttleReady ? "green" : "red";

  // Determine visibility of faultyItems
  faultyItems.style.visibility =
    !isShuttleReady || (isANumber(fuelLevel) && isANumber(cargoMass))
      ? "visible"
      : "hidden";
}

////task 3
async function myFetch() {
  try {
    const response = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const planetsReturned = await response.json();
    return planetsReturned;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

function pickPlanet(planets) {
  //get random index in the range of the planets array length
  const randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports = { isANumber };

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
