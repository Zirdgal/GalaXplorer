import { materials, materialGains, woodIncrease } from "../data/data.js";

const backButton = document.getElementById("back-button");
const loadingScreen = document.getElementById("loading-screen");
const woodCount = document.getElementById("resource-1-p");

const upgrade = {
    first: {
        location: document.getElementById("upgrade1"),
        infoText: document.getElementById("upgrade1-info-text"),
        statText: document.getElementById("upgrade1-stat-text"),
    }
};

setInterval(function() {
    woodCount.textContent = materials.wood;
}, 1000);

setInterval(woodIncrease, 1000);

backButton.onclick = function returnToMenu() {
    loadingScreen.style.animation = "loadingScreen 1.5s forwards ease-in-out";
    loadingScreen.style.zIndex = "99";
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 1500);
}

upgrade.first.location.onclick = function firstUpgradeClicked() {
    materialGains.wood++;
}
