var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    resetGame();
}
 

function setupModeButtons(){
    //mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            //removes "selected" class from both buttons to make sure both buttons do not have class at same time
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");//adds "selected" class to cicked Mode button
            //check what Mode button is selected and changes overall number of squares accordingly
            if(this.textContent === "EASY"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            resetGame();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener('click', function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "PLAY AGAIN?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function resetGame(){
    //generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //reset h1 background color
    h1.style.background = "#3b8bba";
    //reset texts
    resetButton.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    //change colors of squares, hide last 3 squares if switched to Easy mode
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
	}
};

resetButton.addEventListener("click", function() {
	resetGame();
});

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
};

//picks a color within the array to be the correct choice
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
};

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};

