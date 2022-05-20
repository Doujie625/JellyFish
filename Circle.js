let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#bbf";

class Circle {
    constructor(xpoint, ypoint, radius, color) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'grey';
        context.lineWidth = 3;
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        context.closePath();
    }

    changeColor(newColor) {
        this.color = newColor;
        this.draw(context);
    }

    clickedCircle(xmouse, ymouse) {

        const distance = 
        Math.sqrt(
        ( ( xmouse - this.xpoint) * ( xmouse - this.xpoint) )
        + 
        (( ymouse - this.ypoint) * ( ymouse - this.ypoint) )
        );
        if (distance < this.radius) {
            this.changeColor("#56f")
            return true;
        } else {
            this.changeColor("#f56")
            return false;
        }
        console.log(distance);
    }   
    
}

let circle = new Circle(200, 200, 100, '#f56')
circle.draw(context);

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(circle.clickedCircle(x,y))
    console.log('x: ' + x + 'y: ' + y);
    circle.clickedCircle(x, y);
    // console.log('clicked canvas');
});




var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
}
setInterval(pointerCheck, 1000);
function pointerCheck() {
	console.log('Cursor at: '+pointerX+', '+pointerY);
    

}