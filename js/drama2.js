
var millisClock = 0;
var storyLines;
var i = 0;
var millisInterval = 365;
var song;

var clicked = false;
var beginS = "get ready. click anywhere to begin your story";

var reset = "Start Over";
var Ax, Ay;

var timeOutInterval = 58000;
var startTime;
var yesClick = false;

function preload(){
	storyLines = loadStrings('text/brick.txt');
	song = loadSound('aud/romantic.mp3');
}


function setup(){

	Ax = windowWidth/2;
	Ay = windowHeight/2;
	
	var cvs = createCanvas(windowWidth, windowHeight);
	cvs.attribute('onclick', 'playAudio()');

	textAlign(CENTER, CENTER);
	textSize(170);

}

function startPlay(){
	setInterval(textIndex, millisInterval);
	startTime = millis();
}

function draw() {

	millisClock = millis();

	if(clicked == true){
		background(color(255, 0, 72));
		fill(255);
		textSize(170);
		textFont("Poppins");
		text(storyLines[i], windowWidth/2, windowHeight/2)
	} else{
		background(color(0));
		fill(255);
		textSize(50);
		textFont("Poppins");
		text(beginS, windowWidth/2, windowHeight/2);
	}

	if (millisClock - startTime > timeOutInterval){
	buttonStart();
	}
}

function buttonStart(){

	fill(color(255, 0, 72))
	rectMode(CENTER);
	noStroke();
	rect(windowWidth/2, windowHeight/2, 300, 200);
	fill(255);
	textSize(50);
	text(reset, windowWidth/2, windowHeight/2);
	yesClick = true;
	
}

function mouseClicked() {
	if ( (Ax-150) < mouseX  && mouseX < (Ax+150) && (Ay-100) < mouseY && mouseY < (Ay+100) && yesClick == true){
		window.location.href = "index.html";
	}
}

function textIndex(){
	i++;
	console.log(storyLines[i]);
}


function playAudio(){
	if(!song.isPlaying()){
		song.play();
		clicked = true;
	}
}

document.querySelector('body').addEventListener('click', function() {
  song.output.context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});