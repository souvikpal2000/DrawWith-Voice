let Xpos=0, Xv=0, Ypos=0, Yv=0, stop=false;

var SpeechRec = new p5.SpeechRec();
SpeechRec.continuous = true;
SpeechRec.interimResults = true;
function setup()
{
	createCanvas(1500,450);
	strokeWeight(4);
	background(255);
	SpeechRec.start();
	SpeechRec.onResult = showResult;
}
function draw()
{
	if(width/2+Xpos > 1490)
	{
		Xpos = -740;
	}
	else if(width/2+Xpos < 10)
	{
		Xpos = 740;
	}
	else if(height/2+Ypos > 440)
	{
		Ypos = -215;
	}
	else if(height/2+Ypos < 10)
	{
		Ypos = 215;
	}
	point(width/2+Xpos, height/2+Ypos);
	if(stop == false)
	{
		Xpos = Xpos + Xv;
		Ypos = Ypos + Yv;
	}
}
function showResult()
{
	console.log(SpeechRec.resultString);
	switch(SpeechRec.resultString)
	{
		case "up":
		{
			Yv = -1;
			Xv = 0;
			break;
		}
		case "down":
		{
			Yv = 1;
			Xv = 0;
			break;
		}
		case "right":
		{
			Yv = 0;
			Xv = 1;
			break;
		}
		case "left":
		{
			Yv = 0;
			Xv = -1;
			break;
		}
		case "stop":
		{
			stop = true;
			Yv = 0;
			Xv = 0;
			break;
		}
		case "start":
		{
			stop = false;
			break;
		}
		case "restart":
		{
			stop = false;
			Xv = 0;
			Xpos = 0;
			Yv = 0;
			Ypos = 0;
			background(255);
			break;
		}
	}
}