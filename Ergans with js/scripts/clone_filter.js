/* cards cloning !!!!!!!!!!!!!!!!!*/

const victim = document.querySelector("article");
for (const data of victimsArray) {
  const clone = victim.cloneNode(true);
  document.querySelector("#cards").append(clone);

  // getting the value of quantity data
  clone.style.backgroundImage = "url(" + data.pictureUrl + ")";

  clone.querySelector(".stockCard").innerText = data.quantity;

  // this allows me to change the stockcard title

  console.log(data.quantity);

  if (data.quantity > 0) {
    clone.querySelector(".stockCard").innerHTML = "IN STOCK";
  } else {
    clone.querySelector(".stockCard").innerHTML = "SOON";
    clone.querySelector(".stockCard").style.backgroundColor = "grey";
  }

  const all = document.querySelector("#all");
  const soon = document.querySelector("#soon");
  const stock = document.querySelector("#stock");

  // all button
  all.addEventListener("click", function () {
    if (data.quantity > 0 || data.quantity == 0) {
      clone.style.display = "block";
    }
  });

  // stock button
  stock.addEventListener("click", function () {
    if (data.quantity == 0) {
      clone.style.display = "none";
    } else {
      clone.style.display = "block";
    }
  });

  // soon button
  soon.addEventListener("click", function () {
    if (data.quantity > 0) {
      clone.style.display = "none";
    } else {
      clone.style.display = "block";
    }
  });

  victim.remove();
}
