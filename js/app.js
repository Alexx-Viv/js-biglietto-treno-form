var nameField = document.getElementById("name");
var kmField = document.getElementById("km");
var ageField = document.getElementById("age");
var button = document.getElementById("generate-ticket");
var reset = document.getElementById("reset");

var passengerName = document.getElementById("passenger-name");
var discount = document.getElementById("discount");
var cab = document.getElementById("cab");
var trainCode = document.getElementById("train-code");
var ticketPrice = document.getElementById("ticket-price");

button.addEventListener("click", function () {
  var nameValue = nameField.value;
  var kmValue = kmField.value;
  var ageValue = ageField.value;
  var trainCodeValue = trainCode;
  var price = 0.21 * kmValue;
  var discountValue = "Tariffa ordinaria";

  if (ageValue === "min") {
    price *= 0.8;
    discountValue = "Sconto per Junior applicato";
  } else if (ageValue === "max") {
    price *= 0.4;
    discountValue = "Sconto per Senior applicato";
  }

  price = "Euro " + price.toFixed(2);

  var cabNumber = Math.floor(Math.random() * 12) + 1;

  passengerName.innerHTML = " " + nameValue;
  discount.innerHTML = " " + discountValue;
  cab.innerHTML = " " + cabNumber;
  ticketPrice.innerHTML = " " + price;
  trainCodeValue.innerHTML = "74837";
});

reset.addEventListener("click", function () {
  nameField.value = "";
  kmField.value = "10";
  ageField.value = "mag";

  passengerName.innerHTML = "";
  discount.innerHTML = "";
  cab.innerHTML = "";
  ticketPrice.innerHTML = "";
  trainCode.innerHTML = "";
});
