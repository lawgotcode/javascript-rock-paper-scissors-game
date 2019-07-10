const game = ()=> {
  let pScore = 0;
  let cScore = 0;
 // start the game
  const startGame = () =>{
  	const playBtn = document.querySelector(".intro button");
  	const introScreen = document.querySelector(".intro");
  	const match = document.querySelector(".match");

  	playBtn.addEventListener("click", () => {
  		introScreen.classList.add("fadeOut");
  		match.classList.add("fadeIn");
  	});
  };

  // play match
  const playMatch = () => {
  	const options = document.querySelectorAll(".options button");
  	const playerHand = document.querySelector(".player-hand");
  	const computerHand = document.querySelector(".computer-hand");
  	// computer options
  	const computerOptions = ['rock', 'papers', 'scissors'];

  	const computerNumber = Math.floor(Math.random() * 3);

  	options.forEach(option=>{
       option.addEventListener("click", function() {
        // computer choice
       	const computerNumber = Math.floor(Math.random() * 3);
       	const computerCjoice = computerOptions[computerNumber];
       	console.log(computerChoise);
       });
  	});
  };



 //is call the inner function
 startGame();
 playMatch()
};

// here starts the game
game();




