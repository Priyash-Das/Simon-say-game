// Initialize empty sequences for the game's pattern and the user's clicks
let gameSequence = [];
let userSequence = [];

// Available button colors (must match class and id in HTML)
let btns = ["palevioletred", "lawngreen", "yellow", "lightskyblue"];

// Game state variables
let started = false;
let level = 0;

let h2 = document.querySelector("h2"); // Grab the heading element to update text like level or game over

// Start the game when any key is pressed
document.addEventListener("keypress", function() {
    if(started == false) {
        started = true; // only start once
        
        levelUp(); // start first level
        console.log("------------------------------- \nGame is started!")
        console.log("------------------------------- \n-------------")
    }
});

// Add flash effect when the game shows a button
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 500);
}
// Add flash effect when user clicks a button
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

// Increase level and generate next color in the sequence
function levelUp() {
    userSequence = []; // reset user clicks for new level
    level++;
    h2.innerText = `Level ${level}`

    // Pick a random color and show it
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    console.log(`Game chose the ${randomBtn.textContent}.`)
    
    gameSequence.push(randomColor)
    console.log(gameSequence)
    console.log(`So the game chose random index: "${randomIdx}" and random color: "${randomColor}". \n-------------`)

    gameFlash(randomBtn); // show the flash
}

// Check user's input against the game sequence
function checkAns(indx){
    if(gameSequence[indx] === userSequence[indx]) {
        console.log("Same value\n|\n|\n|"); 

        // If user has completed the full sequence, move to next level
        if(gameSequence.length === userSequence.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        // If wrong input, show game over message and reset
        h2.innerHTML = `Game Over!&nbsp;&nbsp;&nbsp;Your score was <b>${level}</b> <br> <span style="font-size: 0.99rem;">Press any key to start again</span>`;
        console.log("-------------------------")
        console.log("Game Over!")
        console.log("-------------------------")
        reset();
    }
}

// Handle button clicks from the user
function btnPress() {
    let btn = this;
    userFlash(btn); // show flash on click
    
    let userColor = btn.getAttribute("id"); // get button color
    userSequence.push(userColor); // store user choice
    
    console.log(`You chose the ${this.textContent}.`);
    checkAns(userSequence.length - 1); // check the latest answer
}

// Add click listeners to all buttons
let allBtn = document.querySelectorAll(".btn");
for(let btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

// Reset the game state after game over
function reset() {
    started = false;
    level = 0;
    gameSequence = [];
    userSequence = [];
}