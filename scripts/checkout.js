// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

function checkout() {
  document.getElementById("wallet").innerText =
    localStorage.getItem("amount") || 0;

  const movie = JSON.parse(localStorage.getItem("movie"));
  let div = document.createElement("div");
  div.style.textAlign = "center";
  div.style.marginTop = "20px";
  let img = document.createElement("img");
  img.src = movie.poster;
  img.style.width = "300px";
  img.style.height = "450px";
  let title = document.createElement("p");
  title.innerText = movie.title;
  div.append(img, title);
  document.getElementById("movie").append(div);
}
checkout();

function confirmBooking() {
  let userName = document.getElementById("user_name").value;
  let numberOfSeats = document.getElementById("number_of_seats").value;
  let amount = parseInt(numberOfSeats) * 100;
  if (amount > parseInt(localStorage.getItem("amount"))) {
    alert("Insufficient Balance!");
    return;
  } else {
    alert("Booking successfull!");
    localStorage.setItem(
      "amount",
      parseInt(localStorage.getItem("amount")) - amount
    );
  }
  checkout();
}