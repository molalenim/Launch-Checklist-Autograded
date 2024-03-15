// Write your helper functions here!

// require('cross-fetch/polyfill');

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

function validateInput(testInput) {
    if (typeof testInput !== 'string') {
        return "Not a String";
    } else if (testInput.trim() === "") {
        return "Empty";
    } else if (isNaN(parseFloat(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}
// maybe remove document from as parameter, it's already available in global scope? Also, I still don't know what list is for...ask phillip
function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {   
    
    
    //convert fuelLevel to a string
    fuelLevel = String(fuelLevel);
    cargoMass = String(cargoMass);

    let pilotStatus = validateInput(pilotName);
    let coPilotStatus = validateInput(copilotName);
    let fuelLevelStatus = validateInput(fuelLevel);
    let cargoMassStatus = validateInput(cargoMass);

    let faultyItems = list; // Use the list parameter directly
    let launchStatus = document.getElementById("launchStatus");
    
   

    //validate input field for empty fields 
    if (pilotName.trim() === "" || copilotName.trim() === "" || fuelLevel.trim() === "" || cargoMass.trim() === "") {
         console.log("Missing fields detected.");
        alert("All fields are required!"); // Alert for missing fields
        return;
    }

    //check for non-numeric input
    if (fuelLevelStatus === "Not a Number" || cargoMassStatus === "Not a Number") {
        // console.log("Non-numeric input detected.");
        alert("Make sure to enter valid information for each field!")
    }

    // Check for non-string input
    if (pilotStatus === "Not a String" || coPilotStatus === "Not a String") {
        
        alert("Pilot and co-pilot names must be strings!");
        return;
    }

    //update pilot status
    document.getElementById("pilotStatus").textContent = `Pilot ${pilotStatus}`;

    //update copilot status
    document.getElementById("copilotStatus").textContent = `Co-pilot ${coPilotStatus}`;

    //update fuel status
    document.getElementById("fuelStatus").textContent = (fuelLevelStatus === "Is a Number" && parseInt(fuelLevel) >= 10000) ?
        "Fuel level high enough for launch": "Fuel level too low for launch";
    
    //update cargo status
    document.getElementById("cargoStatus").textContent = (cargoMassStatus === "Is a Number" && parseInt(cargoMass) <= 10000) ?
        "Cargo mass low enough for launch" : "Cargo mass too heavy for launch" ;


    //update visibility of faulty items
    list.style.visibility = (pilotStatus === "Empty" || coPilotStatus === "Empty" || fuelLevelStatus === "Empty" || cargoMassStatus === "Empty") ?
        "visible" : "hidden";

    //update launch status text and color
    launchStatus.textContent = (faultyItems.style.visibility === "visible") ?
        "Shuttle not ready for Launch" : "Shuttle is ready for Launch";
    launchStatus.style.backgroundColor = (faultyItems.style.visibility === "visible") ?
        "red" : "green";   
       
}
////task 3
async function myFetch() {
    try {
      const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const planetsReturned = await response.json();
      return planetsReturned;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  

function pickPlanet(planets) {
    //get random index in the range of the planets array length
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;




