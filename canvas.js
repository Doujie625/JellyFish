var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.beginPath();
// c.ellipse(x, y, radx, rady, null, .685, 5.598, false);
// c.moveTo(x, y + 60); 
// c.ellipse(x + 5, y + 60, radx1, rady1, null, 0, 7, false);
// c.moveTo(x, y + 60);
// c.ellipse(x + 5, y - 60, radx1, rady1, null, 0, 7, false);
// c.fillStyle = '#b668ff'; 
// c.fill();

// for (var i = 0; i < 5; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var radx = 25;
//     var rady = 75;
//     c.beginPath();
//     c.ellipse(x, y, radx, rady, null, .785, 5.498, false);
//     c.fillStyle = '#b668ff'; 
//     c.fill();
// }


function Ellipse(x, y, radx, rady) {
    this.x = x;
    this.y = y;
    this.radx = radx;
    this.rady = rady;

    this.draw = function() {
        c.beginPath();
        c.ellipse(x, y, radx, rady, null, .685, 5.598, false);
        c.moveTo(x, y + 60); 
        c.ellipse(x + 5, y + 60, radx1, rady1, null, 0, 7, false);
        c.moveTo(x, y + 60);
        c.ellipse(x + 5, y - 60, radx1, rady1, null, 0, 7, false);
        c.fillStyle = '#b668ff'; 
        c.fill();
    
    }
}

var ellipse = new Ellipse(200, 200, 25, 74);
ellipse.draw();



var x = Math.random() * innerWidth;
var dx = (Math.random() - 0.5);
var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5);
var radius = 100;
var radx = 25;
var rady = 75;
var radx1 = 15;
var rady1 = 15;
var rot = (Math.PI / Math.random() * 2);
var sAngle = (Math.PI * .25);
var eAngle = (1.75 * Math.PI);

function animate () {
    //Clears the Set
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    //creates the jelly
    c.beginPath();
    c.ellipse(x, y, radx, rady, null, .685, 5.598, false);
    c.moveTo(x, y + 60); 
    c.ellipse(x + 5, y + 60, radx1, rady1, null, 0, 7, false);
    c.moveTo(x, y + 60);
    c.ellipse(x + 5, y - 60, radx1, rady1, null, 0, 7, false);
    c.fillStyle = '#b668ff'; 
    c.fill();
    //adds velocity / makes the jelly drift
    x += dx;
    y -= dy;
    // makes jelly stay inside canvas
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    //This animates the swiming of our Jellies
    if (rady < 95) {
        rady += .1;
        rady1 += .1;
    }
    if (radx < 35) {
        radx += .05;
        radx1 += .05;
    }

}
animate();