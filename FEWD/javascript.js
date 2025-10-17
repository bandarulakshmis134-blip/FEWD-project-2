let score = 0;           // How many points you have
let timeLeft = 30;       // How much time is left
let gameRunning = false; // Is the game playing?
let moleTimer;           // Timer for moles popping up
let gameTimer;           // Timer for the whole game

// Get elements from HTML - like finding toys in a toy box
const scoreDisplay = document.getElementById('score'); // Where we show the score
const timerDisplay = document.getElementById('timer'); // Where we show the timer
const restartBtn = document.getElementById('restartBtn'); // Restart button
const holes = document.querySelectorAll('.mole-hole'); // All mole holes

// When restart button is clicked, start the game!
restartBtn.addEventListener('click', startGame); // Start game on button click

// Add click listeners to each hole
holes.forEach(hole => {
    hole.addEventListener('click', whackMole); // Whack mole on hole click
});

// Function to start the game
function startGame() {
    console.log("🎮 Starting game!"); 
    
    // Reset everything
    score = 0; // Reset score
    timeLeft = 30; // Reset time
    gameRunning = true; // Game is now running
    
    // Update displays
    scoreDisplay.textContent = `Score: ${score}`; // Reset score display
    timerDisplay.textContent = `Time: ${timeLeft}`; // Reset timer display
    
    // Change button to show game is running
    restartBtn.textContent = "🎮 Playing..."; // Change button text
    restartBtn.disabled = true; // Disable button during game
    
    // Clear all holes
    //"for each" hole, do the following:
    // Remove active class and reset hole content
    // This ensures no moles are visible at the start
    // Loop through each hole
    
    // For each hole, remove 'active' class and reset content to empty
    // This prepares the game board for a new game
    // Clear all holes
    // Loop through each hole

    // For each hole, remove 'active' class and reset content to empty
    // This prepares the game board for a new game

    holes.forEach(hole => {
        // For each hole, remove 'active' class and reset content to empty
        // This prepares the game board for a new game
        hole.classList.remove('active'); // Remove active class
        hole.textContent = '🕳️'; // Reset hole content
    });
    
    // Start the timers
    startMoleTimer(); // Start mole timer
    startGameTimer(); // Start game timer
}

// Function to make moles appear randomly
function startMoleTimer() { // This function makes moles appear at random intervals
    moleTimer = setInterval(() => { // Set interval to show moles
        if (gameRunning) { // Only if game is running
            showRandomMole(); // Show a random mole
        }
    }, 1000); // New mole every 1 second
}

// Function to show a mole in a random hole
function showRandomMole() {
    // Clear all holes first
    holes.forEach(hole => {
        hole.classList.remove('active');
        hole.textContent = '🕳️';
    });
    
    // Pick a random hole (0, 1, or 2)
    const randomHole = Math.floor(Math.random() * 3); // Random number between 0-2
    const selectedHole = holes[randomHole]; // Get the selected hole
    
    // Show mole in selected hole
    selectedHole.classList.add('active'); // Add active class
    selectedHole.textContent = '🐹'; // Show mole emoji

    console.log(`🐹 Mole appeared in hole ${randomHole + 1}!`); // Log mole appearance

    // Hide mole after 1.5 seconds
    setTimeout(() => {
        if (selectedHole.classList.contains('active'))// If mole is still there
        {
            selectedHole.classList.remove('active');// Remove mole
            selectedHole.textContent = '🕳️';// Reset hole content
            console.log("🐹 Mole disappeared!"); // Log mole disappearance
        }
    }, 1500); // Mole stays for 1.5 seconds
}

// Function when you click on a mole
function whackMole(event)  // event is the click event
 {
    const hole = event.target; // The hole that was clicked
    
    // Only count if game is running
    if (!gameRunning) return;
    
    // Check if this hole has a mole
    if (hole.classList.contains('active')) // If mole is there
        {
        console.log("💥 WHACK! You hit the mole!"); //if mole is there

        // Add points
        score += 10; // Each mole is worth 10 points
        scoreDisplay.textContent = `Score: ${score}`; // Update score display
        
        // Remove mole
        hole.classList.remove('active'); // Remove active class
        // Show explosion emoji
        hole.textContent = '💥';
        
        // Show explosion for a moment
        setTimeout(() => {
            hole.textContent = '🕳️'; // Reset hole content
        }, 300);// Show explosion for 0.3 seconds
    } else {
        console.log("💨 Missed! No mole there!"); //
    }
}

// Function to count down the game timer
function startGameTimer() {
    gameTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}`;
        
        // When time runs out
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000); // Count down every 1 second
}

// Function to end the game
function endGame() 
//What this function does when the game ends
    // This function handles all the tasks needed to properly end the game
    // It stops the game, clears timers, resets the display, and shows the final score
    // It also re-enables the restart button for a new game
    // It ensures the game state is clean and ready for the next round
    // It provides feedback to the player about their performance
    // It maintains the overall user experience by managing game flow
    // It ensures no moles are left on the screen
    // It provides a clear indication that the game has ended
    // It resets the game environment for future play
    // It communicates the end of the game to the player effectively
    // It ensures all game elements are in their correct state post-game
    // It finalizes the game session and prepares for a new one
    // It handles all necessary cleanup tasks after the game ends
    // It provides closure to the game session for the player
    // It ensures a smooth transition from gameplay to game over state
    // It manages the end-of-game logic and user interface updates
    // It ensures the player is informed of their final score and game status
    // It resets interactive elements to their default state for future games
    // It maintains the integrity of the game state throughout the end process
    // It ensures a consistent and enjoyable user experience from start to finish
    // It provides a satisfying conclusion to the game session
    // It ensures all game mechanics are properly terminated at the end.

{
    console.log("🏁 Game Over!"); // Log game over message

    gameRunning = false; // Stop the game
    
    // Stop all timers
    clearInterval(moleTimer); // Stop mole timer
    clearInterval(gameTimer); // Stop game timer

    // Clear all holes
    holes.forEach(hole => {
        hole.classList.remove('active'); // Remove active class
        hole.textContent = '🕳️'; // Reset hole content
    });
    
    // Show final score
    alert(`🎉 Game Over! Your final score is: ${score} points!`); // Show alert with final score

    // Reset button
    restartBtn.textContent = "🔄 Play Again"; // button text
    restartBtn.disabled = false; // Enable button
}

// Tell everyone the game is ready!
console.log("🚀 Whack-a-Mole game is ready! Click 'Start Game' to play!"); 