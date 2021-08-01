// Victims name validation !!!!!!!!!!

const nameValidation = document.querySelector("#victim");
nameValidation.addEventListener("keyup", function () {
  const nameValue = nameValidation.value;
  const nameValid = nameValue.includes(" ");
  if (nameValid) {
    nameValidation.style.border = "5px solid green";
  } else {
    nameValidation.style.border = "5px solid red";
  }
});

// when to carry validation !!!!!!!!!!!!!!

const carryValidation = document.querySelector("#carry");
carryValidation.addEventListener("keyup", function () {
  const carryValue = carryValidation.value;
  const carryValid = carryValue.length >= 4;
  if (carryValid) {
    carryValidation.style.border = "5px solid green";
  } else {
    carryValidation.style.border = "5px solid red";
  }
});
