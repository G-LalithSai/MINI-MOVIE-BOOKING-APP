let wallet = document.getElementById("wallet");
let walletAmount = localStorage.getItem("amount") || 0;
console.log(walletAmount);
wallet.innerText = walletAmount;

function addtoWallet() {
  let amount = document.getElementById("amount").value;
  walletAmount = parseInt(walletAmount) + parseInt(amount);
  localStorage.setItem("amount", walletAmount);
  wallet.innerText = walletAmount;
  amount = null;
}
