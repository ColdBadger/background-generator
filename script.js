
//VARIABLES
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generator = document.querySelector(".generator");
var direction = document.querySelector(".direction");
var changeDirection = document.querySelector(".change-direction");
var tempDirection = [];
//
function inputLength() {
	return direction.value.length;
}
//
function generateButtonClick() {
	generateBackground();
}
//DISPLAYS INITIAL AND CURRENT CSS LINEAR-GRADIENT VALUE
function displayCSS() {
	css.textContent = body.style.background + ";";
	direction.focus();
}
function checkDirectionEquality(){
	return direction.value === tempDirection || direction.value === "";
}
//CALLS TO CHANGE BACKGROUND ON COLOR INPUT OR GRADIENT CHANGE EVENT, AND DISPLAYS NEW COLOR VALUE
function setGradient() {
	var gradientBackground = "linear-gradient("+ direction.value +"deg, " + color1.value + ", " + color2.value + ")";
    body.style.background = gradientBackground;
    generator.style.background = gradientBackground;
	changeDirection.style.background = gradientBackground;
    displayCSS();
}
//SETS RANDOM GRADIENT DIRECTION ON USER CLICK 
//!!!WON'T RUN AFTER userDirectionClick OR userDirectionEnter!!!!
function randomDirectionClick() {
	if (checkDirectionEquality()) {
		direction.value = Math.floor(Math.random() * (+ 360 - (+0))) + (+0); 
		tempDirection = direction.value;
		setGradient();
	} else {
		userDirectionClick();
	}
}
//SETS USER SPECIFIED GRADIENT DIRECTION ON CLICK
function userDirectionClick() {
	var a = direction.value;
	if (a >= 0 && a <= 360 && a != tempDirection){
	tempDirection = a;
	setGradient();
} else if (inputLength() < 0 || isNaN(a) === true || a > 360) {
	alert("Please Enter A Valid Number Between 0 And 360");
	direction.value = [];
} 
direction.focus();
}
function userDirectionEnter() {
	var a = direction.value;
	if (inputLength() > 0 && isNaN(a) === false && a < 360 && a >= 0 && a != tempDirection){
		tempDirection = a;
		setGradient();
	} else if (inputLength() < 0 || isNaN(a) === true || a > 360) {
		alert("Please Enter A Valid Number Between 0 And 360");
		direction.value = [];
	}
}
function randomDirectionEnter(event) {
	var a = direction.value;
	if (event.keyCode===13 && checkDirectionEquality()){
		direction.value = Math.floor(Math.random() * (+ 360 - (+0))) + (+0); 
		tempDirection = direction.value;
		setGradient();
	} else if (event.keyCode===13 && checkDirectionEquality() === false) {
		userDirectionEnter();
	}
}
//SETS INITIAL BACKGROUND VALUES TO MATCH INPUT COLOR AND GENERATES NEW RANDOM COLORS ON CLICK
function generateBackground() {
	direction.value = Math.floor(Math.random() * (+ 360 - (+0))) + (+0); 
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

changeDirection.addEventListener("click", randomDirectionClick);

direction.addEventListener("keypress", randomDirectionEnter); 

//CALL FUNCTIONS
generateBackground();
displayCSS();
direction.focus();

