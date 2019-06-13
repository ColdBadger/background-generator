
//VARIABLES
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generator = document.querySelector(".generator");
var direction = document.querySelector(".direction");
var changeDirection = document.querySelector(".change-direction");
var tempDirection = "";


//GRADIENT DIRECTION CALCULATION






//CALL FUNCTIONS
generateBackground()
displayCSS()

function inputLength() {
	return direction.value.length;
}


function generateButtonClick() {
	generateBackground();
	
}



//DISPLAYS INITIAL RGB VALUE OF INPUT COLOR
function displayCSS() {
    css.textContent = body.style.background + ";"
}
//CHANGES BACKGROUND COLOR AND GRADIENT DIRECTION VALUES BASED ON USER INPUT
function setBackground() {
	var gradientBackground = "linear-gradient("+ direction.value +"deg, " + color1.value + ", " + color2.value + ")";
    body.style.background = gradientBackground;
    generator.style.background = gradientBackground;
    changeDirection.style.background = gradientBackground;
    displayCSS();
}

//CALLS TO CHANGE BACKGROUND ON COLOR INPUT CHANGE EVENT, AND DISPLAYS NEW COLOR VALUE
function setGradient() {
	setBackground();
    displayCSS();
}

function userDirectionClick() {
	if (direction.value >= 0 && direction.value <= 360){
    setBackground();
    displayCSS();
}
}





/////FIX THIS//////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function randomDirectionClick() {
	if (direction.value === tempDirection) {
		direction.value = Math.floor(Math.random() * (+ 360 - + 0)) + + 0; 
		tempDirection = direction.value;
		displayCSS();
	} else {
		userDirectionClick();
		tempDirection = direction.value;
		displayCSS();
	}
}

function userDirectionEnter(event) {
	var a = direction.value;
	if (event.keyCode===13 && inputLength() > 0 && isNaN(a) === false && a < 360 && a > 0){
		setBackground();
		displayCSS();
	} else if (inputLength() < 0 || isNaN(a) === true || a > 360) {
		alert("Please Enter A Valid Number Between 0 And 360");
		direction.value = "";
	}

}

//SETS INITIAL BACKGROUND VALUES TO MATCH INPUT COLOR AND GENERATES NEW RANDOM COLORS ON CLICK
function generateBackground() {
	direction.value = Math.floor(Math.random() * (+ 360 - + 0)) + + 0; 
	color1.value = "#" +Math.floor(Math.random() * 16777216).toString(16);
	color2.value = "#" +Math.floor(Math.random() * 16777216).toString(16);
	var gradientBackground = "linear-gradient("+ direction.value +"deg, " + color1.value + ", " + color2.value + ")";
    body.style.background = gradientBackground;
    generator.style.background = gradientBackground;
    changeDirection.style.background = gradientBackground;
    tempDirection = direction.value;
    displayCSS();
}



//EVENT LISTENERS
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

generator.addEventListener("click", generateButtonClick);

changeDirection.addEventListener("click", userDirectionClick);

changeDirection.addEventListener("click", randomDirectionClick);

direction.addEventListener("keypress", userDirectionEnter);

