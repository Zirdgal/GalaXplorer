const backButton = document.getElementById("back-button");
const loadingScreen = document.getElementById("loading-screen");

backButton.onclick = function returnToMenu() {
    loadingScreen.style.animation = "loadingScreen 1.5s forwards ease-in-out";
    loadingScreen.style.zIndex = "2";
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 1500);
}