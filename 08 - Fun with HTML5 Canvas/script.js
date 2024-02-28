const canvas = document.querySelector('#draw'); // select the canvas element
const ctx = canvas.getContext('2d'); // get the context in 2d
canvas.width = window.innerWidth; // set the width of the canvas to the window width
canvas.height = window.innerHeight; // set the height of the canvas to the window height
ctx.strokeStyle = '#BADA55'; // set the color of the stroke
ctx.lineJoin = 'round'; // set the line join
ctx.lineCap = 'round'; // set the line cap
ctx.lineWidth = 100; // set the line width
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false; // flag to check if the mouse is down
let lastX = 0;  // last x position
let lastY = 0;  // last y position
let hue = 0; // color
let direction = true; // direction of the line width

function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    console.log(e); // print the event
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // set the color of the stroke
    ctx.beginPath(); // start from
    ctx.moveTo(lastX, lastY); // go to
    ctx.lineTo(e.offsetX, e.offsetY); // draw a line to
    ctx.stroke(); // stroke the line
    [lastX, lastY] = [e.offsetX, e.offsetY]; // update the last x and y position
    
    hue++; // increment the color
    if (hue >= 360) { // reset the color
        hue = 0; 
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) { // change the direction of the line width
        direction = !direction; 
    }
    
    if(direction) { // increment or decrement the line width
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => { // listen for the mouse down event
    isDrawing = true; 
    [lastX, lastY] = [e.offsetX, e.offsetY]; // update the last x and y position
});     
canvas.addEventListener('mousemove', draw); // listen for the mouse move event
canvas.addEventListener('mouseup', () => isDrawing = false); // listen for the mouse up event
canvas.addEventListener('mouseout', () => isDrawing = false); // listen for the mouse out event
