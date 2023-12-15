const backButton = document.getElementById("back-button");
const loadingScreen = document.getElementById("loading-screen");
const coinCount = document.getElementById("coin-count");

let materials = {
    coin: 0,
};

// Initialize materials with values from localStorage (runs after HTML/DOM is ready)
document.addEventListener("DOMContentLoaded", function () {
    materials.coin = parseInt(localStorage.getItem("coin")) || 0;
    // Update UI with the retrieved values
    coinCount.textContent = materials.coin;
});

backButton.onclick = function returnToMenu() {
    loadingScreen.style.animation = "loadingScreen 1.5s forwards ease-in-out";
    loadingScreen.style.zIndex = "99";
    setTimeout(function() {
        window.location.href = "../../index.html";
    }, 1500);
};

// M O D A L 
var modal = document.getElementById("skill-button-1-modal");
var btn = document.getElementById("skill-button-1");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}