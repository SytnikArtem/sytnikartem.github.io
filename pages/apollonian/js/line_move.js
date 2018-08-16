// gavnocode start
var canvas = document.getElementById('line_move');
var ctx = canvas.getContext('2d');
var w = 600;
var h = 350;

canvas.width = w;
canvas.height = h;

var x1 = 150;
var y1 = 20;

var x2 = 250;
var y2 = 350;

var x3 = 30;
var y3 = 40;

var x4 = 50;
var y4 = 250;

var x5 = 350;
var y5 = 350;

var x6 = 10;
var y6 = 100;

var x7 = 100;
var y7 = 300;

var vx1 = 1;
var vy1 = 3;
var vx2 = 2;
var vy2 = 2;
var vx3 = 1;
var vy3 = 1;
var vx4 = 1;
var vy4 = 1;
var vx5 = 1;
var vy5 = 2;
var vx6 = 3;
var vy6 = 2;
var vx7 = 2;
var vy7 = 3;

// var vx1 = 1 * Math.random() * 1.3;
// var vy1 = 3 * Math.random() * 1.3;
// var vx2 = 2 * Math.random() * 1.3;
// var vy2 = 2 * Math.random() * 1.3;
// var vx3 = 3 * Math.random() * 1.3;
// var vy3 = 2 * Math.random() * 1.3;
// var vx4 = 2 * Math.random() * 1.3;
// var vy4 = 1 * Math.random() * 1.3;
// var vx5 = 1 * Math.random() * 1.3;
// var vy5 = 2 * Math.random() * 1.3;
// var vx6 = 1 * Math.random() * 1.3;
// var vy6 = 2 * Math.random() * 1.3;
// var vx7 = 2 * Math.random() * 1.3;
// var vy7 = 4 * Math.random() * 1.3;

function draw() {
  ctx.beginPath();

  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);

  ctx.moveTo(x2,y2);
  ctx.lineTo(x3,y3);

  ctx.moveTo(x3,y3);
  ctx.lineTo(x4,y4);
  ctx.moveTo(x4,y4);
  ctx.lineTo(x5,y5);

  ctx.moveTo(x2,y2);
  ctx.lineTo(x4,y4);

  ctx.moveTo(x1,y1);
  ctx.lineTo(x5,y5);

  ctx.moveTo(x3,y3);
  ctx.lineTo(x5,y5);

  ctx.moveTo(x1,y1);
  ctx.lineTo(x4,y4);

  ctx.moveTo(x4,y4);
  ctx.lineTo(x3,y3);

  ctx.moveTo(x2,y2);
  ctx.lineTo(x3,y3);

  ctx.moveTo(x1,y1);
  ctx.lineTo(x6,y6);

  ctx.moveTo(x2,y2);
  ctx.lineTo(x6,y6);

  ctx.moveTo(x3,y3);
  ctx.lineTo(x6,y6);

  ctx.moveTo(x4,y4);
  ctx.lineTo(x6,y6);

  ctx.moveTo(x5,y5);
  ctx.lineTo(x6,y6);

  ctx.moveTo(x1,y1);
  ctx.lineTo(x7,y7);

  ctx.moveTo(x2,y2);
  ctx.lineTo(x7,y7);

  ctx.moveTo(x3,y3);
  ctx.lineTo(x7,y7);

  ctx.moveTo(x4,y4);
  ctx.lineTo(x7,y7);

  ctx.moveTo(x5,y5);
  ctx.lineTo(x7,y7);

  ctx.moveTo(x6,y6);
  ctx.lineTo(x7,y7);

  ctx.moveTo(x6,y1);
  ctx.lineTo(x7,y7);

  ctx.moveTo(x2,y2);
  ctx.lineTo(x6,y1);

  ctx.moveTo(x4,y1);
  ctx.lineTo(x3,y3);

  ctx.moveTo(x7,y7);
  ctx.lineTo(x4,y1);

  ctx.moveTo(x1,y7);
  ctx.lineTo(x5,y5);

  ctx.moveTo(x3,y3);
  ctx.lineTo(x1,y7);


  ctx.closePath();
  ctx.stroke();
}

function move() {
  if (x1 > w  || x1 < 0) {
    vx1 = -vx1;
  }
  if (y1 > h || y1 < 0) {
    vy1 = -vy1;
  }

  if (x2 > w  || x2 < 0) {
    vx2 = -vx2;
  }
  if (y2 > h || y2 < 0) {
    vy2 = -vy2;
  }
  if (x3 > w  || x3 < 0) {
    vx3 = -vx3;
  }
  if (y3 > h || y3 < 0) {
    vy3 = -vy3;
  }
  if (x4 > w  || x4 < 0) {
    vx4 = -vx4;
  }
  if (y4 > h || y4 < 0) {
    vy4 = -vy4;
  }
  if (x5 > w  || x5 < 0) {
    vx5 = -vx5;
  }
  if (y5 > h || y5 < 0) {
    vy5 = -vy5;
  }
  if (x6 > w  || x6 < 0) {
    vx6 = -vx6;
  }
  if (y6 > h || y6 < 0) {
    vy6 = -vy6;
  }
  if (x7 > w  || x7 < 0) {
    vx7 = -vx7;
  }
  if (y7 > h || y7 < 0) {
    vy7 = -vy7;
  }
  
  x1 -= vx1;
  y1 -= vy1;
  x2 += vx2;
  y2 += vy2;
  x3 += vx3;
  y3 += vy3;
  x4 += vx4;
  y4 += vy4;
  x5 += vx5;
  y5 += vy5;
  x6 += vx6;
  y6 += vy6;
  x7 += vx7;
  y7 += vy7;
  
}


var time = 150;
var flag = true;
var maxValue = 255;
function loop(){

   time = flag ? time + 1 : time - 1;
   if (time === maxValue) {
    flag = false; 
   } else if (time === 100) {
    flag = true;
   }
  
  ctx.clearRect(0, 0, w, h);

  var cr = 'rgba('+ 0 +','+ time +','+ 0 + ',' + 0.4 + ')';

  ctx.strokeStyle = cr;

  draw();
  
  move();
  
  requestAnimationFrame(loop);
}

loop();
