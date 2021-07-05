var numSquares = 6;
var colors = [];
var pickedColor;

var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
       
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6
        reset();
    });
}

resetButton.addEventListener("click", function(){
    reset();
})

function reset(){
  

    colors = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"

    for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
    }
    h1.style.background = "steelBlue";
}

for(var i=0; i<squares.length; i++) {

    squares[i].addEventListener("click" , function () {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            changeColors();
            messageDisplay.textContent = "Correct!";
            h1.style.background = pickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            messageDisplay.textContent = "Try Again!";
            this.style.background = "#232323";
        }
    });
    
}

reset();

function changeColors(){
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = pickedColor;
    }
}

function pickcolor(){
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
    var arr = [];

    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

