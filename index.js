document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const mainPlanetElements = {
        topbar: {
            topbarContainer: document.getElementsByClassName("topbar")[0],
            coins: {
                cointCount: document.getElementById("coin-count"),
                coinContainer: document.getElementsByClassName("coins")[0],
            },
        },
        animation: {
            state: false
        },
        info: {
            container: document.getElementsByClassName("main-planet-info")[0],
            header1: document.getElementById("main-planet-info-h1"),
        },
        mainButtons: {
            container: document.getElementsByClassName("above-info-buttons")[0],
            skillTreeButton: document.getElementById("skill-tree-button"),
        },
        overview: {
            container: document.getElementsByClassName("main-planet-overview")[0],
            button: document.getElementById("main-planet-overview"),
        },
        img: document.getElementById("main-planet-img"),
        button: document.getElementById("main-planet-button")
    };
    let materials =  {
        coin: 0,
    };

    materials.coin = parseInt(localStorage.getItem("coin")) || 0;
   mainPlanetElements.topbar.coins.cointCount.textContent = materials.coin;

    mainPlanetElements.button.onclick = mainPlanetElements.info.container.onclick = function animationFunction() {
        if(mainPlanetElements.animation.state === false) {
            mainPlanetElements.img.style.animation = "planetMovingUpWards 1.5s forwards ease-in-out";
            mainPlanetElements.info.container.style.animation = "planetInfoBoxMovingUpWards 1.5s forwards ease-in-out";
            mainPlanetElements.info.header1.innerHTML = "Information:";
            mainPlanetElements.button.disabled = true;
            setTimeout(function(){
                mainPlanetElements.animation.state = true;
                mainPlanetElements.button.disabled = false;
                mainPlanetElements.button.style.height = "50vh";
                mainPlanetElements.button.style.width = "100vw";
            }, 1500);
        } else {
            mainPlanetElements.img.style.animation = "planetMovingDownWards 1.5s forwards ease-in-out";
            mainPlanetElements.info.container.style.animation = "planetInfoBoxMovingDownWards 1.5s forwards ease-in-out";
            mainPlanetElements.button.disabled = true;
            setTimeout(function(){
                mainPlanetElements.animation.state = false;
                mainPlanetElements.button.disabled = false;
                mainPlanetElements.button.style.height = "1vh";
                mainPlanetElements.button.style.width = "1vw";
                mainPlanetElements.info.header1.innerHTML = "*Planet Name*";
            }, 1500);
        }
    };
    mainPlanetElements.mainButtons.skillTreeButton.onclick = function goToSkillTree() {
        loadingScreen.style.animation = "loadingScreen 1.5s forwards ease-in-out";
        loadingScreen.style.zIndex = "99";
        setTimeout(function() {
            window.location.href = "pages/skill-tree/skill-tree.html";
        }, 1500);
    };
    mainPlanetElements.overview.button.onclick = function goToOverviewSection() { 
        loadingScreen.style.animation = "loadingScreen 1.5s forwards ease-in-out";
        loadingScreen.style.zIndex = "99";
        setTimeout(function() {
            window.location.href = "pages/planet-overview/planet-overview.html";
        }, 1500);
    };
});