// Variables
// -- Endpont
const ENDPOINT_API = "https://dariaus-citybee-backend.herokuapp.com/";
// -- DOM
const vehicleOutput = document.querySelector("#vehicleOutput");
const getAllVehicles = document.querySelector("#getAllVehicles");
const getVehiclesInLt = document.querySelector("#getVehiclesInLt");
const getVehiclesInLv = document.querySelector("#getVehiclesInLv");
const getVehiclesInEe = document.querySelector("#getVehiclesInEe");
// Functions

function fetchVehicles(endpoint_ending) {
  return fetch(`${ENDPOINT_API}${endpoint_ending}`)
    .then((response) => response.json())
    .then((data) => {
      vehicleOutput.innerHTML = "";
      data.sort((a, b) => a.car_name > b.car_name);
      let i = 1;
      data.forEach((item) => {
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.scope = "row";
        th.textContent = i;

        const tdModel = document.createElement("td");
        tdModel.textContent = item.car_name;

        const tdPricePerHour = document.createElement("td");
        tdPricePerHour.textContent = `${item.hour_price}\u20AC`;

        const numberPlate = document.createElement("td");
        numberPlate.textContent = item.number_plate;

        const location = document.createElement("td");
        switch (item.county_location) {
          case "lt":
            location.textContent = "Lietuvoje";
            break;
          case "lv":
            location.textContent = "Latvijā";
            break;
          case "ee":
            location.textContent = "Eestis";
            break;
          default:
            break;
        }

        tr.append(th, tdModel, tdPricePerHour, numberPlate, location);
        vehicleOutput.append(tr);

        i++;
      });
    });
}
// Events
document.addEventListener("DOMContentLoaded", () => {
  fetchVehicles("vehicles");
});
getAllVehicles.addEventListener("click", () => {
  fetchVehicles("vehicles");
});
getVehiclesInLt.addEventListener("click", () => {
  fetchVehicles("vehicles/lt");
});
getVehiclesInLv.addEventListener("click", () => {
  fetchVehicles("vehicles/lv");
});
getVehiclesInEe.addEventListener("click", () => {
  fetchVehicles("vehicles/ee");
});
