var app = function() {
  var canvas = document.getElementById('main-canvas');
  console.log(canvas);
  var context = canvas.getContext('2d');
  console.log(context);

  var x = 0;
  var y = 0;
  var drawingLine = false;

  var buttonUp = document.getElementById('button-up');
  buttonUp.onclick = function() {
    if (drawingLine) {
      drawingLine = false;
    } else {
       drawingLine = true;
    }

    context.beginPath();
    context.moveTo(x,y);
    y -= 10;
    context.lineTo(x,y);
    context.stroke();
  };

  var buttonDown = document.getElementById('button-down');
  buttonDown.onclick = function() {
    if (drawingLine) {
      drawingLine = false;
    } else {
       drawingLine = true;
    }

    context.beginPath();
    context.moveTo(x,y);
    y += 10;
    context.lineTo(x,y);
    context.stroke();
  };

  var buttonLeft = document.getElementById('button-left');
  buttonLeft.onclick = function() {
    console.log(drawingLine);
    if (drawingLine) {
      drawingLine = false;
    } else {
       drawingLine = true;
    }

    console.log("drawing");
    context.beginPath();
    context.moveTo(x,y);
    x -= 10;
    context.lineTo(x,y);
    context.stroke();
  };

  var buttonRight = document.getElementById('button-right');
  buttonRight.onclick = function() {
    if (drawingLine) {
      drawingLine = false;
    } else {
       drawingLine = true;
    }

    context.beginPath();
    context.moveTo(x,y);
    x += 10;
    context.lineTo(x,y);
    context.stroke();
  };



  // var drawCircle = function(x, y) {
  //   context.beginPath();
  //   context.arc(x,y,25,0,Math.PI*2);
  //   context.stroke();
  // }

  // canvas.onclick = function(event) {
  //   drawCircle(event.layerX, event.layerY);
  // };

  // var img = document.createElement('img');
  // img.src = "http://www.codebearsoftware.com/BearCoding.jpg";

  // var drawBear = function() {
  //   context.drawImage(img, 300, 300);
  // }

  // img.onload = drawBear;

  // var changeColor = function() {
  //   context.strokeStyle = this.value;
  // }

  // var colorPicker = document.getElementById('input-color');
  // colorPicker.onchange = changeColor;
}

window.onload = app;