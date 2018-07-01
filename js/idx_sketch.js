// var titleText = "HeadDrama";

// var textFill;
// var sizeInterval = 800;

// var titleSize;

function setup(){

	createCanvas(windowWidth, windowHeight);
	noStroke();
	rectMode(CENTER);

}



function draw(){

	background(random(200,240), 40);  //single number: grayscale; second number: opacity

	var rectR;
	var rectB;


	if (frameCount % 1 == 0){

		for(var y = 0; y < 8; y++){
			rectR = random(120, 200);

			for(var x = 0; x < 10; x++){
				rectB = random(60, 180);
				fill(rectR,0,80,20);
				push();
				translate(x * (width / 10) + 70, y * (height / 8) + 40);
				rotate(frameCount * 0.03);
				rect(0, 0, 8, random(30,90));
				pop();
			}
		}


		if (frameCount % 8 == 0){
			var rad1 = random(20,180);
			fill(200, 30, random(80,180), 90);
			ellipse(random(windowWidth), random(windowHeight), rad1 ,rad1);
		}


		var rad2 = random(20, 80);

		for (var i = 0; i <15; i++){
			fill(random(180, 200),0,random(180), 30);
			ellipse(i * 100 + 100, (frameCount * 2) % height, rad2 ,rad2);
		}

		for (var i = 0; i <15; i++){
			fill(random(180, 200),0,random(180), 30);
			ellipse(i * 100 + 40, windowHeight - ((frameCount * 2) % height), rad2 ,rad2);
		}
	}
	

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
