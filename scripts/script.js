// ! Elements
// startButton or maybe key-press to start the game.
const startButton = document.getElementById('start-button')
// livesRemaining targetetted with a span<♥ ♥ ♥>-  to show how many lives are remaining for the player.
const livesRemaining = document.getElementById('lives')
// scoreDisplay targetetted with a span - to show many points the player has accrued at any point during the game.
const scoreDisplay = document.getElementById('current-score')
// ? variable for speed (ghost & pacman) or universal speed?
 // gameOn? = boolean true or false to show whether the game is still playing or not. 
 let score = 0
 let lives = 3
 let skittles = 0
 let atePowerFood = false




/* An element to set up the grid - this is mostly likely going to be done with the use of a for element.
  Grid will then compromise of different cell blocks denoting where pacman can and can't go, ie:
  div.cell element to select each individual cell.
  .skittles(food) for pacman */

  const grid = document.getElementById('game')
  const width = 20
  const cellCount = width * width  // represents the numeber of cells in the grid
  const cells = []
  // starting position
  const startPos = 296
  let currentPos = startPos
  let 

  // barriers = for impenetrable grids, these will be lines at the perimeter of the game, however this characteristic can also be used to determine the maze.
  barrierArray = [
  0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 180,
  200, 220, 240, 245, 260, 265, 280, 285, 290, 300, 305, 320, 330, 340, 350, 360, 380,
  390, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 119, 139, 159, 199,
  209, 219, 229, 239, 249, 259, 269, 279, 289, 299, 319, 329, 339, 349, 359, 379, 389, 399,
  29, 30, 31, 49, 50, 51, 69, 70, 71, 89, 90, 91, 342, 343, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 327, 328, 329, 330, 331, 332, 333, 327, 247, 267, 287, 307, 313, 293, 273, 253, 2,
  381, 382, 383, 385, 386, 387, 388, 389, 391, 392, 393, 394, 395, 396, 397, 398, 399, 291, 271, 251, 231, 211, 212, 213, 193, 208, 207,
  242, 243, 244, 282, 283, 302, 303, 245, 265, 285, 305, 255, 256, 257, 295, 297, 315, 317,
  215, 216, 217, 218, 195, 196, 197, 198, 201, 202, 203, 204, 205, 181, 182, 183, 184, 185, 187,
  42, 43, 44, 45, 46, 47, 62, 63, 65, 66, 67, 102, 104, 106, 
  53, 54, 56, 57, 73, 74, 75, 76, 77, 113, 115, 117, 
  141, 142, 143, 144, 145, 153, 154, 155, 156, 157, 158, 128, 148, 130, 150, 384, 344, 64,
];
powerFood = [ 55, 310, 21, 264]

class Ghost{
  constructor(className, ghostIndex, speed) {
    this.className = className
    this.ghostIndex = ghostIndex
    this.speed = speed
    this.startingPosition = ghostIndex
    this.timer = 0
  }
}

ghosts = [
  new Ghost('blinky', 168, 250),
  new Ghost('blue_ghost', 38, 350),
  new Ghost('clyde', 152, 500),
  new Ghost('inky', 361, 400)

]

  // cell arrays



// ! Variables

function gridCreate(){
  for (let i = 0; i < cellCount; i++){
    const cell = document.createElement('div')
    cell.classList.add('skittle')
    cell.innerText = i 
    cell.id = i
    // setting width and height:
    cell.style.width = `${100 / width}%`
    cell.style.height = `${100 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
  barrierArray.forEach((index) => {
    cells[index].classList.remove('skittle')
    cells[index].classList.add('barrier')
  });

  powerFood.forEach((index) => {
    cells[index].classList.remove('skittle')
    cells[index].classList.add('power-food')
  })
  addpacMan(startPos)
}


function addpacMan(position) {
  cells[currentPos].classList.add('pacmandown')
}

function removePacman(){
  cells[currentPos].classList.remove('pacmandown')
}

//  * playerMove
// function for movement, this can be done as taught -=/+= width to move either left or right and the same logic but using a number for upwards or downwards movement.
// above function will also have to take into account that pacman cannot go everywhere on the board, walls seem pretty simple, but inner barriers will need a novel solution.
// above function should also be able to show the food being eaten as pacman moves from one cell to another, own function?
// also take into account food eaten and increasing score.

function playerMove(event) {
  const key = event.code
  removePacman()

  if (cells[currentPos].classList.contains('skittle')) {
    cells[currentPos].classList.remove('skittle')
    score++
    scoreDisplay.innerText = score
  }
  if(cells[currentPos].classList.contains('power-food')) {
    cells[currentPos].classList.remove('power-food')
    atePowerFood = true
    score += 100
    scoreDisplay.innerText = score
  }

  if (key === 'ArrowUp' && !cells[currentPos - width].classList.contains('barrier') && currentPos % width !== 0) {
    currentPos -= width
  } else if(key === 'ArrowDown' && !cells[currentPos + width].classList.contains('barrier') && currentPos + width <= cellCount - 1 ){
    currentPos += width
  } else if (key === 'ArrowLeft' && !cells[currentPos - 1].classList.contains('barrier') && !cells[currentPos].classList.contains('skittles') && currentPos  % width !== 0){
    currentPos -= 1}
    else if(key === 'ArrowLeft' && cells[currentPos - 1] === 159) {
      currentPos = 179
  } else if (key === 'ArrowRight' && !cells[currentPos + 1].classList.contains('barrier')){
    currentPos += 1
  } else if (key === 'ArrowRight' && cells[currentPos + 1] === 180 && cells[currentPos + 1].classList.contains('barrier')){
    currentPos = 160
  }
  addpacMan()

}


gridCreate()

// * startGame 
// start game function - should be started by an event.
// should trigger game music to be played
// pacman and ghosts should appear, pacman & ghosts should begin moving a small interval after startGame has been activated.

// // first we add the ghosts
ghosts.forEach(function(ghost) {
  cells[ghost.startingPosition].classList.add(ghost.className); // Use ghost.name
  cells[ghost.startingPosition].dataset.ghostIndex = ghost.ghostIndex;
});

function moveGhost(ghost){
  const ghostDirection = [-1, +1, + width, - width]
  // redefined here so it is within scope:
  // interval for movement
  ghost.timer = setInterval(function () {
    if (ghost && ghost.startingPosition !== undefined) {
      const direction = ghostDirection[Math.floor(Math.random() * ghostDirection.length)]
      const nextPosition = ghost.startingPosition + direction

      if (nextPosition >= 0 && nextPosition < cells.length) {
        if (!cells[nextPosition].classList.contains(ghost.className) && 
            !cells[nextPosition].classList.contains('barrier')) {
          // remove the ghost class from the current position
          cells[ghost.startingPosition].classList.remove(ghost.className)
          // update the ghost's position
          ghost.startingPosition = nextPosition

          // add the ghost class to the new position
          cells[nextPosition].classList.add(ghost.className)

          console.log(nextPosition)
        }
      }else {
        direction = ghostDirection[Math.floor(Math.random() * ghostDirection.length)]
    }}
  }, ghost.speed) 
}

ghosts.forEach((ghost) => {
  moveGhost(ghost)
  // console.log(`Ghost: ${ghost.className}, Direction: ${direction}`)
})




// *CheckforCollision position
// setInterval function that will check the position of pacman in relation to the ghost, if in the same cell player will lose a life and reset the games starting position.
// In situations where pacman has eaten the special skittle, check collision should result in ghost being eaten.





// * ghost movement. 
// depending on complexity or details, movement could be done in loops, where each ghost follows set paths or maybe something more complex, more research needed.
// reversed movement in the case pacman eats a special snack and can eat the ghosts - potentially reversal of movement so it appears they're moving away rather than towards?
// the movement for each ghost will have to be different and each dino has slightly different characteristics that should be taken into account.

  




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

document.addEventListener('keydown', playerMove)