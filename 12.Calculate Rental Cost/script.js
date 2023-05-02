const submitButton = document.querySelector("button");

function getRentalCost() {
  let NumOfDays = document.querySelector("#num-of-days").value;
  let typeOfCar = document.querySelector("#type-of-car").value.toLowerCase();
  let rentalCost;
  let result;

  switch(typeOfCar) {
    case "economy": 
    rentalCost = 4000;
    break;

    case "midsize": 
    rentalCost = 10000;
    break;

    case "luxury": 
    rentalCost = 20000;
    break;

    default: 
    rentalCost = "Invalid Type of Car";
    break;
  }
  result = NumOfDays * rentalCost;
  return alert(result);
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  getRentalCost();
});
