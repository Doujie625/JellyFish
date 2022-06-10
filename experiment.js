const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// Set the Dimensions of the canvas
canvas.width = innerWidth;
canvas.height = innerHeight;
// access to sprite sheet

const jelly = new Image();
// Initialize random starting postion
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
currentJelly = "Images/Jelly_six_1.svg"
jelly.src = currentJelly;
jelly.onload = loadImages;
//There are 7 sprites in 1 column
let cols = 6;
let rows = 7;
//To play the animation
let totalFrames = 7;
let currentFrame = 0;
// allow the source position to be updated
let srcX = 0;
let srcY = 0;
// Set the velocity
var dx = Math.random() - 0.1;
var dy = Math.random() - 0.1;
//Record the number of times the "animate" function has been called
let framesDrawn = 0;
// //Find size of individiual sprites
let spriteWidth = 0
let spriteHeight = 0

// Give our Jelly a random rotation
// ctx.moveTo(x, y)
// ctx.clearRect(0, 0, canvas.width, canvas.height); //content of previous frame cleared
// ctx.translate(x, y);
// ctx.rotate(Math.random() * Math.PI * .3);
// ctx.translate(-x, -y);


function animate() {
  ctx.clearRect(0, 0, canvas.width * 2, canvas.height * 2); //content of previous frame cleared
  requestAnimationFrame(animate); //function will be called repeatedly on each new frame
  // //Find size of individiual sprites
  let spriteWidth = jelly.width / cols;
  let spriteHeight = jelly.height / rows;

  currentFrame = currentFrame % totalFrames; //Find current frame
  srcY = currentFrame * spriteHeight; //Src position is updated to show next frame

  // image, srcX, srcY, srcWidth, srcHeight, destX, destY, destWdith, destHeight7
  ctx.drawImage(
    jelly,
    srcX,
    srcY,
    spriteWidth,
    spriteHeight,
    x,
    y,
    spriteWidth,
    spriteHeight
  );

  //Controlls the speed at which the frames roll
  framesDrawn++;
  if (framesDrawn >= 10) {
    currentFrame++;
    framesDrawn = 0;
  }
  // Add the velocity as the speed out jellies move
  x += dx;
  y -= dy;
  // Keep the Jellies inside the window
  if (x > innerWidth || x < 0) {
    dx = -dx;
  }
  if (y > innerHeight || y < 0) {
    dy = -dy;
  }
  // Make the jelly change color depending on his location on the page
  if (y < canvas.height * 0.3) {
    srcX = 0 * spriteWidth;
  } 
  else if (y > canvas.height * 0.3 && y < canvas.height * 0.65) {
    srcX = 1 * spriteWidth;
  } else {
    srcX = 2 * spriteWidth;
  }
  if (hoverState === true) {
    srcX = srcX + 900
    // x += dx * 5
    // y += dy * 5
  }


}
//renders the image before the canvas
let numOfImages = 1;
function loadImages() {
  if (--numOfImages > 0) return;
  animate();
}

// Create a glow effect for when we hover over our Jelleis
addEventListener('mousemove', (event) => {
  if (x - event.clientX < 0 && event.clientX - (x + 200) < 0 && y - event.clientY < -60 && event.clientY - (y + 140) < 0) {
    hoverState = true
  } else if (!(x - event.clientX < 0 && event.clientX - (x + 200) < 0 && y - event.clientY < -60 && event.clientY - (y + 140) < 0)) {
    hoverState = false
  }
});
