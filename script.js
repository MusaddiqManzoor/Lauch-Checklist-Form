// Write your JavaScript code here!
window.addEventListener("load", function () {
   let destination;
  fetch('https://handlers.education.launchcode.org/static/planets.json').
   then(function (response){
      response.json().then(function(json){
         destination = json;
      });
   });

   
let form = document.querySelector("form");
form.addEventListener('submit', function(event){
   event.preventDefault();
   
   let pilotName = document.querySelector('input[name=pilotName]');
   let copilotName = document.querySelector('input[name=copilotName]');
   let fuelLevel = document.querySelector('input[name=fuelLevel]');
   let cargoMass = document.querySelector('input[name=cargoMass]');      

   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById('launchStatus');
   let div = document.getElementById('faultyItems');

   pilotStatus.innerHTML = `${pilotName.value} is ready for launch. `;
   copilotStatus.innerHTML = `${copilotName.value} is ready for launch. `;
   //fuelStatus.innerHTML = `${copilotName.value}`;
   //let itemArray = [pilotName, copilotName, fuelLevel, cargoMass];

   if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '' ) {
    alert('All fields are required.');
   }
   
   else if ( isNaN((fuelLevel.value)) || isNaN((cargoMass.value))  ||
    !isNaN((pilotName.value)) || !isNaN((copilotName.value)) ) {
      alert('invalid data type, please enter the correct one.');
   }

   else if (fuelLevel.value < 10000) {
      fuelStatus.innerHTML = `NOT enough fuel for the journey. `;
      launchStatus.innerHTML = 'Shuttle not ready for launch. ';
      launchStatus.style.color = 'red';
      div.style.visibility= 'visible';
   }

   else if(cargoMass.value > 10000) {
      cargoStatus.innerHTML = `Too much mass for the shuttle to take of. `;
      launchStatus.innerHTML = 'Shuttle not ready for launch. ';
      launchStatus.style.color = 'red';
      div.style.visibility = 'visible';
   }
   else {

      launchStatus.style.color = 'green';
      launchStatus.innerHTML = 'Shuttle is ready for launch. ';
      let launchTo = document.getElementById('missionTarget');
      let index =  Math.floor(Math.random() * destination.length );
      launchTo.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${destination[index].name}</li>
         <li>Diameter: ${destination[index].diameter}</li>
         <li>Star: ${destination[index].star}</li>
         <li>Distance from Earth: ${destination[index].distance}</li>
         <li>Number of Moons: ${destination[index].moons}</li>
      </ol>
      <img src="${destination[index].image}">`
      console.log(destination);

   }  
   
});
});
