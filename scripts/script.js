// ! Elements
// startButton or maybe key-press to start the game.
// livesRemaining targetetted with a span<♥ ♥ ♥>-  to show how many lives are remaining for the player.
// scoreDisplay targetetted with a span - to show many points the player has accrued at any point during the game.
// barriers = for impenetrable grids, these will be lines at the perimeter of the game, however this characteristic can also be used to determine the maze.
// ? variable for speed (ghost & pacman) or universal speed?
 // gameOn? = boolean true or false to show whether the game is still playing or not. 

/* An element to set up the grid - this is mostly likely going to be done with the use of a for element.
  Grid will then compromise of different cell blocks denoting where pacman can and can't go, ie:
  div.cell element to select each individual cell.
  .skittles(food) for pacman */

  const grid = document.querySelector('game')
  console.log(grid)

// ! Variables

// * startGame 
// start game function - should be started by an event.
// should trigger game music to be played
// pacman and ghosts should appear, pacman & ghosts should begin moving a small interval after startGame has been activated.

//  * playerMove
// function for movement, this can be done as taught -=/+= width to move either left or right and the same logic but using a number for upwards or downwards movement.
// above function will also have to take into account that pacman cannot go everywhere on the board, walls seem pretty simple, but inner barriers will need a novel solution.
// above function should also be able to show the food being eaten as pacman moves from one cell to another, own function?
// also take into account food eaten and increasing score.

// *CheckforCollision position
// setInterval function that will check the position of pacman in relation to the ghost, if in the same cell player will lose a life and reset the games starting position.
// In situations where pacman has eaten the special skittle, check collision should result in ghost being eaten.

// * ghost movement. 
// depending on complexity or details, movement could be done in loops, where each ghost follows set paths or maybe something more complex, more research needed.
// reversed movement in the case pacman eats a special snack and can eat the ghosts - potentially reversal of movement so it appears they're moving away rather than towards?
// the movement for each dinosaur will have to be different and each dino has slightly different characteristics that should be taken into account.

// ? ghostDissapear 
// function to play to remove the ghost from the screen if pacman colides with it after eating the special skittle.

// * catchGhost - will change game conditions so pacman is able to 
// use of a setTimeout will be the bases of this fucntion, at the end of the time out we will restart normal ghost mechanics

// * winGame & loseGame function
// should stop all actions on the board, congradulate player and save their score into a database and bring up a start again button.
// signal to player of their failure, offer them the chance to play again.


// ! Events
// event listener for keydown - movements
// event listener for click  - start the game, play music, pause and potentially restart.