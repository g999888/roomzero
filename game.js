
/* 
	random game for LD 37, g12345
	
	sorry i started too late
*/

window.onload = function()
{
	Game.launch("screen");
}

dataFiles = ["font1.png", "char1.png", "back1.png"];

filesLeft = 10;  // random number, will be overwritten

Images = [];

levels = [
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 2, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 2
 ],
[ 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 5, 1, 1, 2
 ],
[ 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 0, 0, 2, 1, 1, 2
 ],
[ 2, 1, 2, 5, 5, 5, 1, 1, 1, 2, 0, 0, 2, 1, 1, 2
 ],
[ 2, 1, 2, 5, 5, 5, 1, 1, 1, 2, 0, 0, 2, 1, 1, 2
 ],
[ 2, 1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 6, 1, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 5, 5, 5, 1, 1, 5, 5, 5, 1, 1, 5, 5, 1, 3
 ],
[ 3, 1, 3, 3, 3, 7, 1, 3, 3, 3, 1, 1, 3, 3, 1, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 5, 5, 5, 1, 1, 5, 5, 5, 1, 7, 5, 5, 1, 3
 ],
[ 3, 1, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 3, 3, 1, 3
 ],
[ 3, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 5, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 2, 1, 5, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2
 ],
[ 2, 1, 1, 5, 2, 1, 5, 2, 1, 5, 2, 1, 5, 2, 1, 2
 ],
[ 2, 1, 5, 2, 1, 4, 2, 1, 5, 2, 1, 5, 2, 1, 1, 2
 ],
[ 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 5, 1, 2
 ],
[ 2, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 1, 5, 5, 5, 3
 ],
[ 3, 5, 7, 5, 1, 5, 7, 5, 1, 5, 5, 7, 5, 5, 5, 3
 ],
[ 3, 5, 5, 3, 1, 5, 5, 3, 1, 5, 3, 1, 5, 3, 5, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2
 ],
[ 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 6, 2, 2, 2, 1, 2
 ],
[ 2, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2
 ],
[ 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2
 ],
[ 2, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
 ],
[ 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 1, 5, 1, 5, 1, 5, 1, 7, 5, 5, 5, 5, 5, 1, 3
 ],
[ 3, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 3
 ],
[ 3, 1, 5, 3, 5, 3, 5, 1, 1, 1, 3, 3, 3, 5, 1, 3
 ],
[ 3, 1, 5, 1, 5, 1, 5, 7, 1, 5, 5, 5, 5, 5, 1, 3
 ],
[ 3, 1, 5, 1, 5, 1, 5, 1, 1, 1, 8, 1, 1, 5, 1, 3
 ],
[ 3, 1, 5, 3, 5, 3, 5, 1, 1, 1, 3, 3, 3, 5, 1, 3
 ],
[ 3, 1, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 1, 3
 ],
[ 3, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 3
 ],
[ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 2, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 2
 ],
[ 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 5, 1, 1, 1, 2
 ],
[ 2, 1, 1, 5, 2, 1, 1, 1, 1, 2, 1, 2, 5, 1, 1, 2
 ],
[ 2, 1, 5, 2, 2, 1, 1, 1, 1, 2, 1, 1, 2, 5, 1, 2
 ],
[ 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2
 ],
[ 2, 5, 1, 2, 2, 5, 5, 5, 5, 5, 2, 2, 1, 1, 5, 2
 ],
[ 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2
 ],
[ 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
 ],
[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
 ]
];


function fileLoaded(filename)
{
	filesLeft --;
	console.log(filename + " loaded.");
}

function loadFile(filename, nr)
{
	var img = new Image();
	img.addEventListener('load', fileLoaded(filename));
	img.src = filename;
	Images.push(img);
}

fontSize = 16;
function sprint(screen,x,y,s)
// prints a string at x,y, no wrapping
{
	var px = x;
	var py = y;
	for (var i=0; i<s.length; i++)
	{
		c = s.charCodeAt(i);
		if ( (c>=97) && (c<=122) ) c-=32;
		if ( (c>=32) && (c<=90) )
		screen.drawImage (Images[0], (c-32)*fontSize,0, fontSize,fontSize, px,py, fontSize,fontSize);
		px += fontSize;
	}
}

Map = [
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1],
	[1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];


var keys = 5;
var Time = 5;
var Playing = 1;
var TileSize = 32;
var	gamesize;
var people = [];
	
function isWall(x,y)
{
	p = Map[Math.floor(y/32)][Math.floor(x/32)];
	if (p==4) 
	{
		Map[Math.floor(y/32)][Math.floor(x/32)] = 0;
		keys --;
	}
	return ((p != 0) && (p!=4));
}

function isWallM2(x,y)
{
	p = Map[Math.floor(y/32)][Math.floor(x/32)];
	return ((p != 0) );
}

function isWallM(x,y)
{
	return  ( (isWallM2(x,y)) || (isWallM2(x+31,y)) || (isWallM2(x,y+31)) || (isWallM2(x+31,y+31)) );
}

Game = {};

Game.launch = function(canvasId)
{
	var canvas = document.getElementById(canvasId);
	var screen = canvas.getContext('2d');
	var gameSize = { x: canvas.width, y: canvas.height };
	gamesize = { x: canvas.width, y: canvas.height };
	var keyboard = new Keyboard();
	
	people = [ new Player(gameSize, keyboard) ];
	people.push (new Alien(people[0]));
	
	filesLeft = dataFiles.length;
	
	for (var i=0; i<dataFiles.length; i++)
		loadFile(dataFiles[i], i);
	
	var update = function()
	{
		for (var y=people.length-1; y>=0; y--)
		{
			people[y].update();
		}
		touchplayer();
	}
	
	TileSize = 32;

	var count = 0;
	
	var loadMap = function (levelnr)
	{
		people = [people [0]];

		Map = [];
		for (var i=0; i<12; i++)
			Map.push(levels[levelnr*12+i].slice());	// slice is absolutely needed here!
		keys = 0;
		for (var y=0; y<12; y++)
		for (var x=0; x<16; x++)
		{
			if (Map[y][x]===0) Map[y][x]=1;
			if (Map[y][x]===6) {people.push (new Bat(x*32, y*32)); Map[y][x]=1;};
			if (Map[y][x]===7) {people.push (new Spider(x*32, y*32)); Map[y][x]=1;};
			if (Map[y][x]===8) {people.push (new Snake(x*32, y*32)); Map[y][x]=1;};
			Map[y][x]--;
			if (Map[y][x]===4) keys ++;
			if (Map[y][x]===3) {people[0].center.x=x*32; people[0].center.y=y*32; Map[y][x]=0;};
		}
		
		Time = 60;
	}
	
	var newGame = function ()
	{
		Playing = 1;
		Level = 0;
		loadMap(Level);
	}
	
	var nextLevel = function ()
	{
		Level ++;
		if (Level > 7) { Playing =2; Level = 0; return; } 
		loadMap(Level);
	}
	
	newGame();
	
	var draw = function(screen, gameSize)
	{
//		screen.clearRect(0,0, gameSize.x, gameSize.y);

		for (var y=0; y<gameSize.y/TileSize; y++)
		for (var x=0; x<gameSize.x/TileSize; x++)
		{
				screen.drawImage (Images[2], 
					Map[y][x]*TileSize,0, 
					TileSize,TileSize, 
					x*TileSize,y*TileSize, 
					TileSize,TileSize);
		}

		for (var y=people.length-1; y>=0; y--)
		{
			people[y].draw(screen);
		}
		
		sprint (screen, 16,8," Time="+Time+"   Cards="+keys+"   Room="+(Level+1)+"  ");
//		sprint (screen, 16,8," X="+people[0].center.x+"   Y="+people[0].center.x+"  ");
	}
	
	var tick = function()
	{
		if (filesLeft === 0)
		{
			// console.log ("All files loaded");
			
			update();
			
			if (Playing===1) { draw(screen, gameSize); if (keys===0) nextLevel(); }
			if (Playing===0) 
			{
				sprint (screen, 150,180," Game Over! "); 
				if (keyboard.isDown(KEYS.SPACE)) newGame();
			}
			if (Playing===2) 
			{ 
				sprint (screen, 150,180," You've won! "); 
				if (keyboard.isDown(KEYS.SPACE)) newGame();
			}
			
			count ++;
			if (count === 60)
			{
				if (Time <= 0)
				{
					Playing = 0;
				}
				Time --;
				count = 0;
			}
		}
		requestAnimationFrame(tick);
	}
	tick();
};

var shieldtime = 0;

function touchplayer()
{
	var px1, px2, py1, py2;
	
	if (shieldtime) { shieldtime--; return; }
	
	var player = people[0];
	px1 = player.center.x+4; px2 = player.center.x+TileSize-5;
	py1 = player.center.y+4; py2 = player.center.y+TileSize-5;
		
	var hit = false;
	
	for (var i=people.length-1; i>=1; i--)
	{
		if (py2 < people[i].center.y+4) continue;
		if (py1 > people[i].center.y+TileSize-5) continue;
		if (px2 < people[i].center.x+4) continue;
		if (px1 > people[i].center.x+TileSize-5) continue;
		hit = true; break;
	}

	if (hit) 
	{
		// player has been hit!
		Time -= 5;
		shieldtime = 10;
	}
}

KEYS = { LEFT:37, UP:38, RIGHT:39, DOWN:40, SPACE:32 };

var Keyboard = function()
{
	var keysPressed = {};
	
	window.onkeydown = function(e) { keysPressed[e.keyCode] = true; };
	window.onkeyup = function(e) { keysPressed[e.keyCode] = false;	};
	this.isDown = function(keyCode)	{ return keysPressed[keyCode] === true; };
};

var Player = function(gameSize, keyb)
{
	this.size = { x: 32, y: 32 };
	this.center = { x: 256, y: 320 };
	this.keyb = keyb;
	this.counter = 0;
	this.frame1 = 0;
	this.framenr = 0;
	this.gameSize = gameSize;
	this.gravity = 0;
	this.inair = 0;
}

Player.prototype =
{
	update: function()
	{
		var ox = this.center.x;
		var oy = this.center.y;
		
		if (this.keyb.isDown(KEYS.LEFT)) 
		{ this.center.x -= 4; this.framenr = 2; }
		else if (this.keyb.isDown(KEYS.RIGHT)) 
		{ this.center.x += 4; this.framenr = 0; }
	
		if (this.keyb.isDown(KEYS.SPACE) && (this.inair === 0)) 
		{ this.gravity = -16; this.inair = 1; }
	
		this.center.y += this.gravity;
		if (this.inair != 0) this.gravity += 1;
	
		if (this.center.x < 0) this.center.x = 0;
		if (this.center.x > this.gameSize.x-this.size.x) this.center.x = this.gameSize.x-this.size.x;
		if (this.center.y < 32) this.center.y = 32;
		if (this.center.y > this.gameSize.y-this.size.y) this.center.y = this.gameSize.y-this.size.y;
		
		var dx = this.center.x - ox;
		var dy = this.center.y - oy;
		
		var ttl = isWall (this.center.x                  , this.center.y     );
		var ttr = isWall (this.center.x + this.size.x - 1, this.center.y     );
		var tbl2 = isWall (this.center.x                  , this.center.y + this.size.y -1 );
		var tbr2 = isWall (this.center.x + this.size.x - 1, this.center.y + this.size.y -1 );
		
		if ((tbl2||ttl) && (dx<0))
		{
			this.center.x = ox;
		}
		
		if ((tbr2||ttr) && (dx>0))
		{
			this.center.x = ox;
		}
		
		ttl = isWall (this.center.x                  , this.center.y     );
		ttr = isWall (this.center.x + this.size.x - 1, this.center.y     );
		var tbl = isWall (this.center.x                  , this.center.y + this.size.y );
		var tbr = isWall (this.center.x + this.size.x - 1, this.center.y + this.size.y );
		
		if ((tbl||tbr) && (dy>0))
		{
			this.center.y = Math.floor(this.center.y/32)*32;
			this.gravity = 0; this.inair = 0;
		}
		
		if ((ttl||ttr) && (dy<0))
		{
			this.center.y = Math.floor(this.center.y/32)*32+32;
			this.gravity = 0; 
		}
		
		if (!tbl && !tbr) this.inair = 1;
		
		if (this.counter%5 === 0) this.frame1 = !this.frame1
		this.counter++;
	},
	
	draw: function(screen)
	{
		screen.drawImage (Images[1], (this.framenr+this.frame1)*32,0, 
							this.size.x,this.size.y, 
							this.center.x,this.center.y, 
							this.size.x,this.size.y);
	}
}

var Alien = function(player)
{
	this.size = { x: 32, y: 32 };
	this.center = { x: Math.floor(Math.random()*250)*2, y: Math.floor(Math.random()*160)*2 };
	this.player = player;
}

Alien.prototype =
{
	update: function()
	{
		if (this.center.x < this.player.center.x) this.center.x += 1;
		if (this.center.y < this.player.center.y) this.center.y += 1;
		if (this.center.x > this.player.center.x) this.center.x -= 1;
		if (this.center.y > this.player.center.y) this.center.y -= 1;
		
		if ( (this.center.x === this.player.center.x) && (this.center.y === this.player.center.y) )
			this.center = { x: Math.floor(Math.random()*300)*2, y: Math.floor(Math.random()*200)*2 };
	},
	
	draw: function(screen)
	{
		screen.drawImage (Images[1], 128,0, this.size.x,this.size.y, 
							this.center.x,this.center.y, 
							this.size.x,this.size.y);
	}
}

var Bat = function(sx, sy)
{
	this.alive = true;
	this.hp = 3;
	this.size = { x: TileSize, y: TileSize };
	this.center = { x: sx, y: sy };
	this.animcounter = 0;
	this.animation = [0,1];
	this.animstartY = TileSize * 4;
	this.dir = 1; // dir is een betterje anders: 1 = left, 2 = right, 4 = up, 8 = down
	this.framecounter = Math.floor(Math.random()*15)+1; // 11;
	this.speed = 1;
	this.randomchance = 0.5;
	
	this.velocity = { x: 1, y: 0 };	
}

Bat.prototype =
{	
	changedir: function()
	{
		c = Math.random();
		if (c<0.2) return 1;
		if (c<0.4) return 2;
		if (c<0.6) return 4;
		if (c<0.8) return 8;
		return 0;
	},
	
	specialmove: function()
	{
		
	},

	move: function()
	{
		this.specialmove();
		
		newx = this.center.x;
		newy = this.center.y;
		
		if (this.dir & 1) { newx -= this.speed;	}
		if (this.dir & 2) { newx += this.speed;	}
		if (this.dir & 4) { newy -= this.speed;	}
		if (this.dir & 8) { newy += this.speed;	}
		
		if ((newx > gamesize.x-this.size.x) || (newx<TileSize) || (newy > gamesize.y-this.size.y) || (newy<TileSize) )
		{
			newx = this.center.x; newy = this.center.y;
			this.dir ^= 15;	// reverse direction
		}
		
		if (isWallM(newx, newy))
		{
			newx = this.center.x; newy = this.center.y;
			this.dir ^= 15;	// reverse direction
		}
		else
		{
			this.center.x = newx; this.center.y = newy;
		}
		
		if ( !(this.center.x % TileSize) && !(this.center.y % TileSize) )
		{
			if (Math.random() < this.randomchance) this.dir = this.changedir();
		}
	},
	
	update: function()
	{
		this.move();
		
		this.framecounter ++;
		if (this.framecounter>=32) this.framecounter=0;
		this.animcounter = (this.framecounter > 15);
	},
	
	draw: function(screen)
	{
		if (!this.alive) return;
		
		var t = this.dir & 2;
		screen.drawImage (Images[1], this.animstartY,0, this.size.x,this.size.y, 
							this.center.x,this.center.y, 
							this.size.x,this.size.y);
	}
}

var Snake = function(sx, sy)
{
	Bat.call(this, sx, sy);
	this.animstartY = TileSize * 6;
	this.dir = 2;
	this.randomchance = 0;
}

Snake.prototype = Object.create(Bat.prototype);
Snake.prototype.constructor = Snake;

var Spider = function(sx, sy)
{
	Bat.call(this, sx, sy);
	this.animstartY = TileSize * 5;
	this.dir = 8;
	this.randomchance = 0;
}

Spider.prototype = Object.create(Bat.prototype);
Spider.prototype.constructor = Spider;
