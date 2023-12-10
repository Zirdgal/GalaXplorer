document.addEventListener("DOMContentLoaded", function() {
    const mainPlanetElements = {
        animation: {
            state: false
        },
        img: document.getElementById("main-planet-img"),
        button: document.getElementById("main-planet-button"),
        info: document.getElementsByClassName("main-planet-info")[0]
    };

    mainPlanetElements.button.onclick = function animationFunction() {
        if(mainPlanetElements.animation.state === false) {
            mainPlanetElements.img.style.animation = "planetMovingUpWards 1.5s forwards ease-in-out";
            mainPlanetElements.info.style.animation = "planetInfoBoxMovingUpWards 1.5s forwards ease-in-out"
            mainPlanetElements.button.disabled = true;
            setTimeout(function(){
                mainPlanetElements.animation.state = true;
                mainPlanetElements.button.disabled = false;
            }, 1500);
        } else {
            mainPlanetElements.img.style.animation = "planetMovingDownWards 1.5s forwards ease-in-out";
            mainPlanetElements.info.style.animation = "planetInfoBoxMovingDownWards 1.5s forwards ease-in-out"
            mainPlanetElements.button.disabled = true;
            setTimeout(function(){
                mainPlanetElements.animation.state = false;
                mainPlanetElements.button.disabled = false;
            }, 1500);
        }
    };
});