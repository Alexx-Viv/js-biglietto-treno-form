var nameField = document.getElementById("name");
var kmField = document.getElementById("km");
var ageField = document.getElementById("age");
var button = document.getElementById("generate-ticket");

var passengerName = document.getElementById("passenger-name");
var discount = document.getElementById("discount");
var cab = document.getElementById("cab");
var trainCode = document.getElementById("traine-ticket");
var ticketPrice = document.getElementById("ticket-price");

button.addEventListener("click", function () {
  var nameValue = nameField.value;
  var kmValue = kmField.value;
  var ageValue = ageField.value;

  console.log(nameValue);
  console.log(kmValue);
  console.log(ageValue);

  var price = 0.21 * kmValue;
  var discountValue = "Tariffa ordinaria";

  if(ageValue === "min"){
      price *= 0.8;
      discountValue = "Sconto per Junior applicato";
  } else if ( ageValue === "max"){
      price *= 0.4;
      discountValue = "Sconto per Senior applicato";
  }

  console.log(price);
});
