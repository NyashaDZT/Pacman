Project 1 - ReadMe Worksheet

Description

This is the first deliverable project I had to do as part of the Software Engineering Immersive Course with General Assembly London. The assignment was to create a grid game which would be rendered in the browser, this was an individual project designed for us to put into practise the HTML, CSS and JavaScript we had been learning for 3 weeks prior to the project beginning.

Out of all the available games we could create, I chose to do PACMAN, truthfully because it was the only game out of the list I remembered playing in my younger days and I thought I wanted to create something that would look similar to how I remembered Pacman. The main objective of the game is to eat all the pellets available on a given level whilst avoiding the ghosts which can take lives away from Pacman.


Deployment link

The game can be opened from this link: https://nyashadzt.github.io/Pacman/ or it can be accessed from my github repo: https://github.com/NyashaDZT/Pacman.


Timeframe & Working Team (Solo/Pair/Group)

This was an individual project, aside from having the tutors there to ask general questions or get some general guidance on problems we may have encountered, there was no external help. The project was to be completed within a week, from Thursday 2nd of November, I was given time to plan my project, this included creating a wireframe and writing some pseudocode which would give me a plan to work from once the project had begun, this was then approved the next day with the deliverable being on Friday the 10th at 11am.


Technologies Used

HTML5
CSS3
JavaScript(ES6)
Git and Github
Pacfont TTF
Visual Studio Code



Brief

Render a game in the browser
Design logic for winning & visually display which player won
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
Use Javascript for DOM manipulation
Deploy your game online, where the rest of the world can access it
Use semantic markup for HTML and CSS (adhere to best practices)

Requirements

Players should be able to clear at least one board.
Player’s score should be displayed at the end of the game.



Planning

The very first step of the project was to create a wireframe, wireframes are commonly used to layout content and functionality of a webpage which should explain the look and functionality of a page without necessarily having the functionality. Wireframes are used in early development stages to establish the basic structure and visual design, the web app I used to create my wireframe is Excalidraw, which can be accessed at www.excalidraw.com, excalidraw is easy to access and had all the tools that I required to create the wire frame, below is a screenshot of the wireframe I developed at the start of the project.

The first conception of the wireframe is over here:


The main content which can be seen on the first conception of the wireframe is that the page was intended to be split into two <divs> or <sections> which would be used to split the webpage into two sides, the one side which would have some sort of instructional menu and underneath there would be a start button. And the other container would contain the grid for the game and underneath we would have our lives and score which would be automatically updated using JS once the Elements had been declared.

Following this, I wrote some pseudocode, the pseudocode was split into sections which would help me formulate my work and give me a better grasp on the order of things, the sections were: elements, variables, functions and event listeners. Within each section there was a breakdown of what code would be needed for that particular section along with small descriptions of what this code should be looking to accomplish, this was also necessary prior to being signed out and I had an extensive discussion with my tutor who told me where I could be going write and where I may have to change my code. Ultimately this code served its purpose and was dynamic, in that once the project had begun there was many times where I had to go back to the original pseudocode and change it, to fit the ever changing landscape for situations where maybe I found that multiple functions, could actually be encompassed as one or vice versa. An example below of how my pseudocode was written, the code below refers to the function of startGame.




Build/Code Process

After implementing some basic HTML and CSS, I quickly started with the grid layout that I wanted, I thought it would vital to get this done as early as possible as it would then allow me to draw my grid and the functionality early that would make the game feel like Pacman. For this purpose, I created a createGrid function, the idea was fairly basic, I selected my grid as an element previously. The dimensions were set outside of the function, the width and height was to be 20 * 20(cellCount), giving us a total number of 400 cells, these cells were to be implemented with different classes in accordance to their functionality, i.e “skittles” for any cells which were going to contain the food that Pacman would consume, or “pacman” for pacman himself. 



This is the gridCreate function, the function is fairly simple to implement, within the function there is a loop which loops as long as our i variable is less than the cellCount(width*width) variable, the loop would then create a div cell, I chose to add the class of skittle to all the cells and then once the grid had been created, create arrays that contained any points which I might want to be different, i.e I created a number with all the cell numbers for any cells which I wanted to be a wall or powerFood, the addition off classes was achieved using the classList method, which was used in almost all the functions as it ultimately controlled how the board looked.

Movement

For Pacmans movement, I added an event listener using the keyDown function in JS, I then targeted the keys I needed for the movement, which were the arrow key. This was done fairly quickly and because of the grid movement I was able to target the directions daily simply by using the following logic, for upwards movement we would add the width to the current position and do the opposite for moving downwards, left to right would work just by subtracting 1 from current position to move left or adding 1 to move right. Conditional if statements were utilised to make sure Pacman stayed on the board, the statement checked to make sure that the check the key that was pressed and that the next cell Pacman was attempting to enter did not contain a class of barrier, if it did the player would not be able to move into this cell, here is the conditionals below:

!cells[currentPos + width].classList.contains('barrier')
Checked to make sure the next cell did not contain the class of barriers. 
&& currentPos + width <= cellCount - 1
Checked to make sure that the next cell did not exceed the total number of cells within the grid.

And because the walls of the grid in every direction aside from the tunnel had a class of barrier I did not need to make any additional checks to make sure that Pacman stayed within the grid.



I was also able to allow pacman to pass through the tunnel by denoting that if he was at position 179 and he hit the ArrrowRight key then the position would then change to 160, which was the opposite end of the tunnel. The actual movement of Pacman was done using ClassList, this means that for whatever cell Pacman was entering unless there was a ghost or a wall, we would remove the current class in there(‘skittle’) which gave the illusion of Pacman eating the pellet as he moved forward and for the illusion to work, the Pacman class would have to have been removed from the previous cell.



The functions for adding and removing pacman are called within the playerMove function, removePacman at the beginning and add Pacman at the end.

I decided to write the conditionals for Pacman, eating the skittles and super-food, I decided to do this because I didn’t believe the function was necessary to write anywhere else, there were two different, this is the part of my code that saw to it that which-ever cell that Pacman entered that either had a class of ‘power-food’ or ‘skittle’ would have that class removed, this meant that within my blocks and conditionals where we checked to arrow key that had been pressed by the player, we did not have to write 4 separate commands for those classes to be removed with each movement Pacman made. Within these conditionals we would update the score variable in accordance to the food Pacman had consumed and we would also target the DOM element so that those changes would be updated on the users screen. Here are those conditionals below, they were at the top of the function within the playerMove and you can spot that the removePacman which was used to remove the class of Pacman.



Ghosts - 

With a fully functioning grid created with boundaries that were respected by Pacman and the pellets added in there that were already updating through the DOM, I thought the next part was to add the ghosts, Pacman’s adversaries who would try and stop him from eating all the pellets on the board and stop the player from ultimately winning. To add the ghosts, I begun by creating a class for ghosts called ‘Ghosts’ the class would take three parameters, a classname which was directly linked to the class name that had been created for that particular ghost within the CSS document, a ghostIndex relating to the starting cell the ghost would appear in and a speed parameter, which would later be used as the delay value for the setInterval which determined how often the interval ran and in turn influencing how quickly each ghost could move from cell to cell.



Above is the figure of the ghost class constructor and the ghost declaration the other variables included within, is a timer which was set at 0, this timer variable would be set equal to the set interval for each ghost, as previously stated the delay function was the speed variable, I also had starting position which would then be equal to ghostIndex, this was a poor choice for a variable as starting position in the context of the code was used as you would a current position variable, this was a learning point that I will take forward with me following the project. I also had a variable declared that would determine whether the ghosts were scared, a condition which only became true if Pacman consumed one of the “Powerfood”s. With classes now created and the ghosts declared in an array, drawing the ghosts on the grid was achieved by using a forEach method on the Array. This was declared within the start game function and would only happen once the start button had been pressed.

 ghosts.forEach(function(ghost) {
   cells[ghost.startingPosition].classList.remove(ghost.className);
   cells[ghost.startingPosition].classList.add(ghost.className);
   cells[ghost.startingPosition].dataset.ghostIndex = ghost.ghostIndex;
 });
 

Movement -

When I started working with the ghosts I initially thought that I would be to have some sort of complex algorithm, I initially looked at implementing Djikstra’s algorithm or something similar to an A* algorithm. I spent about two hours writing notes and researching the best way to implement this, by the end of it I had a few ideas that could potentially work but I had spent many more hours than intended, so in the end I opted to do random movement implemented from on each of the ghost, if I had time the intention was to go and implement a more serious algo. So to move the ghost I created a moveGhost function, which took a ghost as the parameter The first thing declared within the functions was the possible directions that the ghosts would be able to take as such: 

const ghostDirection = [-1, +1, + width, - width]

The next part of the function would then use that timer variable that we had included within the ghost classes to create a setInterval which would apply to each ghost.  Within the set interval, I declared a direction variable as such, this direction was then determined by the Math.Floor and Math. Random selecting one of the directions which was stored within the ghost direction array above; 

const direction = ghostDirection[Math.floor(Math.random() * ghostDirection.length)]
const nextPosition = ghost.startingPosition + direction

Below that we had the nextPosition variable, this was simple ‘ghost.startingposition’ (which is our de facto current position variable as stated before +  the direction that had been determined by the Math.random method previously, this would then give our ghost a direction which it could go in. I just needed to add more conditionals now to determine whether the cell that had been decided was a cell that a ghost could enter, the conditionals again were similar to those placed on Pacmans movement.

Using the same conditionals as the ones we used for Pacman, we could say that if the ghost wanted to enter a cell that had a class of barrier or a class of ghost it wouldn’t be able to. And with that we would then update the starting position to be nextposition and we would then move the ghost across to the next cell in line as shown below, if the loop failed to find an empty cell an if else statement to be run to decide the next cell again.


\\ Check for Collision

Check for collision was the last big  piece of code that I wrote for the game to bring it up to the MVP, but at this point it was very easy to figure out. We would just use conditionals to check if Pacman or the ghosts were within the same cell as the same time, if we had set the ghosts to a scared state then Pacman would be capable of eating the, the remaining lives DOM would be be decreased and the current position of the ghost would be moved back to it’s starting position, within this condition we would then have our Check for loss function if the ghost wasn’t in a scared state and it had taken the life, it would then make sense to check for the make sense to check for the loss within this block.



The ghosts were set to a scared state and unset with the function below here: 



If pacman was to collide with the ghost whilst they were within the scared state, they would then be removed from the board and sent back to the starting position. This again was implemented using very much the same logic, the scared state would also change the state appearance of each ghost to indicate to the player that the ghosts are now in a different position. These were linked by the boolean variables that had been declared at the start of the coding, such as ‘atePowerFood’ and the variable declared in the ghost constructor ‘ghost.scared’.


Challenges

The greatest challenge I faced throughout this building process was probably trying to conceptualise what I wanted to do with the AI, I wrote down some notes and tried a basic solution to implement movement which followed Pacman, but my use of variables and arrays had not reached the appropriate levels in order to implement this cleverer movement. I also faced challenges with the timing of certain functions, one issue I had was with the disappearance of the ghosts when they had been eaten by Pacman, the scared Ghosts would remain on screen until the setInterval running the scared ghost state had run. This was a timing issue with when the Ghost disappear was being called.


An example.

More challenges I had outside of the code was my planning at the start at the start of the week, I was routinely finding myself falling out of the days tasks and focusing on something else that potentially was a job for another day, this meant that coming towards the end of the week I had a few jobs that should have been done earlier in the week that I then had to quickly do at the end of the week, this meant that I potentially didn’t complete the weekly. I managed to clean this up in the final two days by using reminders and diary notes to allot certain time for certain jobs. Particularly using Microsoft calendar was useful and this was a late challenge which I thought had a decent 


Wins

I think I had several wins throughout my project, I was able to think creatively to come up with solutions, all the ideas I had were novel and the code written is fully mine which is something I am very proud of. I was surprised at times at the problem solving I managed throughout the project with as little support I had, I think the thing I am most proud of however is the ghost movement. As basic as it is, at the day when I started working on the random movement, I didn’t know how I would implement it or how I would get the ghosts moving by themselves at all without any human input. And three or so hours of trial and error I had something that worked and the ghosts moving around on screen. 

I believe the readability of my code and note making throughout the process was decent, I could have potentially done better with the way I ordered everything out on the page. But I was very happy with the results and was happy with the general way I was able to manoeuvre between the functions and that comes from a good understanding of how clean code should look. I also think I was able to keep my code as dry as I could considering my skill level for the time being. I was also able to use functions and classes in a way that made me particularly proud of myself.

I think the visual design of my game is pretty good, I tried my best to recreate the pacman board as done in the old, however there are so many different boards to pick from that I chose to do something a bit more personal to me. The sprites that I had were original, I had the original audio from the game which meant that the overall design of the game was nice and nostalgic.



Key Learnings/Takeaways

Insert your Key Learnings/Takeaways here:

The project was a wonderful way to sharpen the skills we had been practising and learning for the last four weeks. At the start of the project, had someone told me that I would build a decent game by the end of my fourth week I would have called them a liar. I was able to get a much better grasp of HTML and of JavaScript. I think there is still much more improvement to make but this was a good starting step. I improved my familiarity with agile development processes such as stand ups and presentations and also understanding how to manage project tasks and prioritising the right tasks during production.



Bugs

Insert your Bugs here:
Ghosts' Erratic Movement: The ghosts sometimes exhibit erratic movement, moving from the same block and adjacent block over and over. This behaviour may stem from the simplicity of the ghost movement algorithm and will be further refined for consistency.
Display Glitch: In certain instances, the game-won message may not display correctly due to CSS styling issues. Ensuring consistent display across different scenarios is an area for improvement.

Future Improvements

Insert your Future Improvements here:

Enhanced Ghost AI: Implement a more sophisticated ghost movement algorithm to enhance the challenge for players. Incorporating pathfinding algorithms like A* or improving the current logic could result in more strategic ghost behaviour.

Dynamic Maze Generation: Introduce dynamic maze generation to create varied and challenging levels. This addition could enhance replayability and keep the game engaging for players.

Responsive Design: Optimise the game for different screen sizes and devices. Ensuring responsiveness would enhance the accessibility of the game for a wider audience.

