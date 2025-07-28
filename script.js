var pipeContainer = document.getElementById("pipe-container");
var pipeTop = document.getElementById("pipe-top");
var pipeBottom = document.getElementById("pipe-bottom");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

pipeContainer.addEventListener('animationiteration', () => {
    let gap = 150;
    let maxTopHeight = 500 - gap - 100; 
    let topHeight = Math.floor(Math.random() * maxTopHeight) + 100;
    let bottomHeight = 500 - topHeight - gap;


    pipeTop.style.height = topHeight + "px";
    pipeBottom.style.height = bottomHeight + "px";
    pipeBottom.style.top = gap + "px"; 

    counter++;
    document.getElementById('score').innerText = "Score: " + counter;
});

setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 2) + "px";
    }

    var pipeLeft = parseInt(window.getComputedStyle(pipeContainer).getPropertyValue("left"));
    var pipeTopHeight = parseInt(window.getComputedStyle(pipeTop).getPropertyValue("height"));
    var pipeBottomTop = pipeTopHeight + 100; 
    var cTop = characterTop;
    var skyHeight = 500;
    var characterHeight = 60;
    if (
        cTop + characterHeight > skyHeight || 
        (pipeLeft < 130 && pipeLeft > 20 &&
         (cTop < pipeTopHeight || cTop > pipeBottomTop))
    ) {
        alert("Game Over. Score: " + (counter - 1));
        character.style.top = 100 + "px";
        counter = 0;
        document.getElementById('score').innerText = "Score: " + counter;
    }

}, 10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 20)) {
            character.style.top = (characterTop - 4) + "px";
        }
        if (jumpCount > 25) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}