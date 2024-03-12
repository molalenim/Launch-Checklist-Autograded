// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
    
    // console.log("FORMSUBMISSION FUNCTION CALLED.");

    let pilotStatus = validateInput(pilotName);
    let coPilotStatus = validateInput(copilotName);
    let fuelLevelStatus = validateInput(fuelLevel);
    let cargoMassStatus = validateInput(cargoMass);
    let faultyItems = list; // Use the list parameter directly
    let launchStatus = document.getElementById("launchStatus");
    
    // //DEBUGGING: LOG VALUES FOR VALIDATION
    //    console.log("Pilot Status:", pilotStatus);
    //    console.log("Co-pilot Status:", coPilotStatus);
    //    console.log("Fuel Level Status:", fuelLevelStatus);
    //    console.log("Cargo Mass Status:", cargoMassStatus);  

    //validate input field for empty fields 
    if (pilotName.trim() === "" || copilotName.trim() === "" || fuelLevel.trim() === "" || cargoMass.trim() === "") {
        // console.log("Missing fields detected.");
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
        // console.log("Non-string input detected.");
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
    faultyItems.style.visibility = (pilotStatus === "Empty" || coPilotStatus === "Empty" || fuelLevelStatus === "Empty" || cargoMassStatus === "Empty") ?
        "visible" : "hidden";

    //update launch status text and color
    launchStatus.textContent = (faultyItems.style.visibility === "visible") ?
        "Shuttle not ready for Launch" : "Shuttle is ready for Launch";
    launchStatus.style.backgroundColor = (faultyItems.style.visibility === "visible") ?
        "red" : "green";   
       
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
