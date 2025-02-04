class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.grid = new Grid(gridSize);
    this.player = new Player(this.grid);
    this.ghosts = [
      new Ghost('blinky', 168, 250, this.grid),
      new Ghost('pinky', 38, 350, this.grid),
      new Ghost('clyde', 152, 500, this.grid),
      new Ghost('inky', 361, 400, this.grid),
    ];
    this.lives = 3;
    this.score = 0;
    this.atePowerFood = false;
    this.gameStatus = false;
  }

  startGame() {
    this.score = 0;
    this.lives = 3;
    this.atePowerFood = false;
    this.grid.reset();
    this.player.reset();
    this.ghosts.forEach(ghost => ghost.reset());
    document.addEventListener('keydown', (e) => this.player.move(e));
    this.ghosts.forEach(ghost => ghost.startMoving());
  }

  checkForCollision() {
    this.ghosts.forEach((ghost) => {
      if (this.player.position === ghost.position) {
        if (this.atePowerFood) {
          ghost.reset();
          this.score += 100;
        } else {
          this.lives--;
          this.player.reset();
        }
      }
    });
  }
}

class Grid {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.cells = [];
    this.barrierArray = [
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
      141, 142, 143, 144, 145, 153, 154, 155, 156, 157, 158, 128, 148, 130, 150, 384, 344, 64
    ];
    thi
    this.powerFood = [55, 310, 21, 264];
    this.init();
  }

  init() {
    const grid = document.getElementById('game');
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('skittle');
      cell.id = i;
      cell.style.width = `${100 / this.gridSize}%`;
      cell.style.height = `${100 / this.gridSize}%`;
      grid.append(cell);
      this.cells.push(cell);
    }
    this.barrierArray.forEach(index => this.cells[index].classList.add('barrier'));
    this.powerFood.forEach(index => this.cells[index].classList.add('power-food'));
  }

  reset() {
    this.cells.forEach(cell => cell.classList.remove('pacman', 'ghost', 'scared-ghost'));
  }
}

class Player {
  constructor(grid) {
    this.grid = grid;
    this.startPos = 296;
    this.position = this.startPos;
  }

  move(event) {
    const key = event.code;
    let newPosition = this.position;

    if (key === 'ArrowUp' && !this.grid.cells[this.position - 20].classList.contains('barrier')) {
      newPosition -= 20;
    } else if (key === 'ArrowDown' && !this.grid.cells[this.position + 20].classList.contains('barrier')) {
      newPosition += 20;
    } else if (key === 'ArrowLeft' && !this.grid.cells[this.position - 1].classList.contains('barrier')) {
      newPosition -= 1;
    } else if (key === 'ArrowRight' && !this.grid.cells[this.position + 1].classList.contains('barrier')) {
      newPosition += 1;
    }

    this.grid.cells[this.position].classList.remove('pacman');
    this.position = newPosition;
    this.grid.cells[this.position].classList.add('pacman');
  }

  reset() {
    this.grid.cells[this.position].classList.remove('pacman');
    this.position = this.startPos;
    this.grid.cells[this.position].classList.add('pacman');
  }
}

class Ghost {
  constructor(className, ghostIndex, speed, grid) {
    this.className = className;
    this.position = ghostIndex;
    this.startingPosition = ghostIndex;
    this.speed = speed;
    this.grid = grid;
    this.timer = null;
    this.scared = false;
  }

  startMoving() {
    const directions = [-1, +1, -20, +20];
    this.timer = setInterval(() => {
      const nextPos = this.position + directions[Math.floor(Math.random() * directions.length)];
      if (!this.grid.cells[nextPos].classList.contains('barrier')) {
        this.grid.cells[this.position].classList.remove(this.className, 'scared-ghost');
        this.position = nextPos;
        this.grid.cells[this.position].classList.add(this.className);
      }
    }, this.speed);
  }

  reset() {
    clearInterval(this.timer);
    this.grid.cells[this.position].classList.remove(this.className, 'scared-ghost');
    this.position = this.startingPosition;
    this.grid.cells[this.position].classList.add(this.className);
    this.startMoving();
  }
}

const game = new Game(20);
document.getElementById('start-button').addEventListener('click', () => game.startGame());

