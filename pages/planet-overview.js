const backButton = document.getElementById("back-button");
const loadingScreen = document.getElementById("loading-screen");
const woodCount = document.getElementById("resource-1-p");
const convertButton = document.getElementById("resource-1-convert");
const coinCount = document.getElementById("coin-count");

const upgrade = {
    first: {
        location: document.getElementById("upgrade1"),
        infoText: document.getElementById("upgrade1-info-text"),
        statText: document.getElementById("upgrade1-stat-text"),
        cost: parseInt(localStorage.getItem("upgrade1Cost")) || 0,
        currentGain: parseInt(localStorage.getItem("upgrade1CurrentGain")) || 0,
        resourceCreationAmount: 0,
    }
};

let materials = {
    coin: 0,
    wood: 0
};

let materialGains = {
    wood: 0
};

// Initialize materials with values from localStorage (runs after HTML/DOM is ready)
document.addEventListener("DOMContentLoaded", function () {
    materials.coin = parseInt(localStorage.getItem("coin")) || 0;
    materials.wood = parseInt(localStorage.getItem("wood")) || 0;

    upgrade.first.currentGain = parseInt(localStorage.getItem("upgrade1CurrentGain")) || 0;
    materialGains.wood = upgrade.first.currentGain;

    // Update UI with the retrieved values
    coinCount.textContent = materials.coin;
    woodCount.textContent = materials.wood;
    upgrade.first.infoText.textContent = `Increases wood creation. Cost: ${upgrade.first.cost}`;
    upgrade.first.statText.textContent = `+1 wood per second (current gain = ${upgrade.first.currentGain})`;
});
// Update materials.wood in the interval
setInterval(function woodIncrease() {
    materials.wood += materialGains.wood;
    woodCount.textContent = Math.floor(materials.wood);
}, 1000);

backButton.onclick = function returnToMenu() {
    // Save resource amounts and upgrade levels to localStorage before navigating to index.html
    localStorage.setItem("coin", materials.coin);
    localStorage.setItem("wood", materials.wood);
    localStorage.setItem("upgrade1Cost", upgrade.first.cost);
    localStorage.setItem("upgrade1CurrentGain", upgrade.first.currentGain);

    loadingScreen.style.animation = "loadingScreen 1.5s forwards ease-in-out";
    loadingScreen.style.zIndex = "99";
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 1500);
};

upgrade.first.location.onclick = function firstUpgradeClicked() {
    if (materials.wood >= upgrade.first.cost) {
        materials.wood = materials.wood - upgrade.first.cost;
        materialGains.wood++;
        upgrade.first.currentGain++;
        upgrade.first.cost++;
        upgrade.first.statText.textContent = `+1 wood per second (current gain = ${upgrade.first.currentGain})`;
        upgrade.first.infoText.textContent = `Increases wood creation. Cost: ${upgrade.first.cost}`;
    }
    // Save upgraded level to localStorage
    localStorage.setItem("upgrade1Cost", upgrade.first.cost);
    localStorage.setItem("upgrade1CurrentGain", upgrade.first.currentGain);
};

convertButton.onclick = function convertButtonClicked() {
    if (materials.wood >= 10) {
        materials.wood = materials.wood - 10;
        materials.coin = materials.coin + 10;
        coinCount.textContent = materials.coin;
    }
    // Save updated resource amounts after conversion
    localStorage.setItem("coin", materials.coin);
    localStorage.setItem("wood", materials.wood);
};
