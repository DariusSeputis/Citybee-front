// Variables
// -- Endpoint
const ENDPOINT_API = "https://dariaus-citybee-backend.herokuapp.com/";
// -- DOM
const modelOutput = document.querySelector("#modelOutput");
const modelCountOutput = document.querySelector("#modelCountOutput");
// Functions
function fetchModels() {
  return fetch(`${ENDPOINT_API}models`)
    .then((response) => response.json())
    .then((data) => {
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

        tr.append(th, tdModel, tdPricePerHour);
        modelOutput.append(tr);

        i++;
      });
    });
}

function fetchModelsCount() {
  return fetch(`${ENDPOINT_API}modelscount`)
    .then((response) => response.json())
    .then((data) => {
      let i = 1;
      data.forEach((item) => {
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.scope = "row";
        th.textContent = i;

        const tdModel = document.createElement("td");
        tdModel.textContent = item.car_name;

        const tdHowMany = document.createElement("td");
        tdHowMany.textContent = `x${item.how_many}`;

        tr.append(th, tdModel, tdHowMany);
        modelCountOutput.append(tr);

        i++;
      });
    });
}
// Events
document.addEventListener("DOMContentLoaded", () => {
  fetchModels();
  fetchModelsCount();
});
