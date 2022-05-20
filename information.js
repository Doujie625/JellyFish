var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// Ellipse Values
var x = 100;
// var x = Math.random() * innerWidth;

var dx = (Math.random() - 0.5);
// var y = Math.random() * innerHeight;
var y = 100;

var dy = (Math.random() - 0.5);
var radius = 100;
var radx = 90;
var rady = 60;
var radx1 = 17.5;
var rady1 = 20;
var ranRot = (Math.PI / Math.random() * 2);
var sAngle = (Math.PI * .25);
var eAngle = (1.75 * Math.PI);


// Triangle Values
b = radx*.6
d = x - radx
e = 

// Begin Ellipse
c.beginPath();
c.ellipse(x, y, radx, rady, null, Math.PI * .75, Math.PI * 2.25, false);
c.fillStyle = '#b668ff'; 
c.lineTo(b, 142);


//Begin left Triangle
c.lineTo(0, 155);
c.lineTo(10, 100);

//Find center of triangle to use as first point in quadratic curve
// c.quadraticCurveTo(b-25, 142, 0, 155);

c.fillStyle = '#b668ff'; 


c.fill();


// c.moveTo(x + 18, y + 52); 
// c.ellipse(x + 3, y + 55, radx1, rady1, null, 0, Math.PI * 2, false);
// c.moveTo(x + 18, y + 52);
// c.ellipse(x + 3, y - 55, radx1, rady1, null, 0, Math.PI * 2, false);

// c.fillStyle = '#b668ff'; 

// // c.strokeStyle = '#b668ff';
// // c.lineWidth = 1;
// c.stroke();