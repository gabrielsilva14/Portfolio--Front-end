//form submission

const myForm = document.querySelector("form");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValidation = document.querySelector("#victim");
  const nameValue = nameValidation.value;
  const nameValid = nameValue.includes(" ");

  const carryValidation = document.querySelector("#carry");
  const carryValue = carryValidation.value;
  const carryValid = carryValue.length >= 4;

  if (carryValid && nameValid) {
    myForm.innerHTML =
      "Thanks for the trust your put into our services. We'll carry " +
      nameValue +
      ", " +
      carryValue;
  } else {
    alert("An error occured, we can't carry your victim.");
  }
});

// trying to do the button and not having success
const carryValue = carryValidation.value;
const carryValid = carryValue.length >= 4;

const nameValue = nameValidation.value;
const nameValid = nameValue.includes(" ");

const button = document.querySelector("button");

if (carryValid && nameValid) {
  button.disabled = false;
}
