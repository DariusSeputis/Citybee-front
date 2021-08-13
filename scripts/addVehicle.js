// Variables
// -- Endpont
const ENDPOINT_API = "https://dariaus-citybee-backend.herokuapp.com/";
// -- DOM
const formElement = document.forms[0];
const carModelInput = formElement.elements[0];
const numberPlateInput = formElement.elements[1];
const countyLocationInput = formElement.elements[2];
const formSubmitResponseOutput = document.querySelector(
  "#formSubmitResponseOutput"
);
// Functions
function fetchCarModels() {
  return fetch(`${ENDPOINT_API}models`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const option = document.createElement("option");
        option.dataset.id = item._id;
        option.textContent = item.car_name;

        carModelInput.append(option);
      });
    });
}
function addVehicleToDB(e) {
  e.preventDefault();
  if (
    !carModelInput.selectedOptions[0].dataset.id ||
    !numberPlateInput.value ||
    countyLocationInput.value === "Choose a country"
  )
    return alert("Please fill form correctly");
  const addVehicle = {
    carModel_id: carModelInput.selectedOptions[0].dataset.id,
    number_plate: numberPlateInput.value,
    county_location: countyLocationInput.value,
  };
  return fetch(`${ENDPOINT_API}vehicles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addVehicle),
  })
    .then((res) => res.json())
    .then((data) => (formSubmitResponseOutput.textContent = data.message))
    .catch((error) => (formSubmitResponseOutput.textContent = error));
}
// Events
document.addEventListener("DOMContentLoaded", fetchCarModels);
formElement.addEventListener("submit", addVehicleToDB);
