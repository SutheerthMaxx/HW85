 canvas =document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

//Give specific height and width to the car image
 width=75;
 height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
Cx=5;
Cy=225;

function add() {
	//upload car, and background images on the canvas.
	img_tag= new Image();
	img_tag.onload=uploadBackground;
	img_tag.src=background_image;

	car_tag= new Image();
	car_tag.onload=uploadgreencar;
	car_tag.src=greencar_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(img_tag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(car_tag,Cx,Cy,width,height);
    
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(Cy>=0)
	{
		Cy = Cy - 10;
		console.log("when up arrow is pressed , x = "  + Cx + " y = " + Cy);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(Cy<=300)
	{
		Cy = Cy + 10;
		console.log("when down arrow is pressed , x = "  + Cx + " y = " + Cy);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(Cx>=0)
	{
		Cx = Cx - 10;
		console.log("when left arrow is pressed , x = "  + Cx + " y = " + Cy);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(Cx<=700)
	{
		Cx = Cx + 10;
		console.log("when right arrow is pressed , x = "  + Cx + " y = " + Cy);
		uploadBackground();
		uploadgreencar();
	}
}
