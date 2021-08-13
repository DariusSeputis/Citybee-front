// Variables
// -- Endpoint
const ENDPOINT_API = "https://dariaus-citybee-backend.herokuapp.com/";
// -- DOM
const formElement = document.forms[0];
const carModelInput = formElement.elements[0];
const pricePerHourInput = formElement.elements[1];
const formSubmitResponseOutput = document.querySelector(
  "#formSubmitResponseOutput"
);
// Functions
function addCarModel(e) {
  e.preventDefault();
  if (!carModelInput.value || !parseInt(pricePerHourInput.value))
    return alert("Please fill the form correctly");
  const addCarModel = {
    car_name: carModelInput.value,
    hour_price: pricePerHourInput.value,
  };
  return fetch(`${ENDPOINT_API}models`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addCarModel),
  })
    .then((res) => res.json())
    .then((data) => (formSubmitResponseOutput.textContent = data.message))
    .catch((error) => (formSubmitResponseOutput.textContent = error));
}
// Events
formElement.addEventListener("submit", addCarModel);
