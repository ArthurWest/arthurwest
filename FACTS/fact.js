'use strict';
document.getElementById("Ihead").addEventListener("change",change);
document.getElementById("Imain").addEventListener("change",change);
document.getElementById("Iphoto").addEventListener("change",change);
function change() {
  document.getElementById("heading").innerHTML = document.getElementById("Ihead").value;
  document.getElementById("main").innerHTML = document.getElementById("Imain").value;
  document.getElementById("img").src = document.getElementById("Iphoto").value;
  canvas()
}


// document.getElementById("butt").addEventListener("change",canvas)
function canvas() {
  // Basic rules
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

canvas.width = 1200;
canvas.height = 720;

// Background
ctx.fillStyle = "#0d0d0d";
ctx.fillRect(0,0,canvas.width,canvas.height)

//Image
var img = document.getElementById('img');
ctx.drawImage(img,0,0,1280,720)

//Title 
//Background
ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
ctx.fillRect(0,380,1280,80);
//Title Text
ctx.font = 10;
var text = document.getElementById("heading").innerHTML;
var textXpos = canvas.width/2;

var headSize = 75;
var textYpos = 375;
ctx.fillStyle = "white";
var fontT = headSize + "px Arial";
ctx.font = fontT;
ctx.textAlign ="center";
ctx.textBaseline="top"; 
if (ctx.measureText(text).width > 1100) {
  while (ctx.measureText(text).width > 1100) {
  var headSize = headSize - 0.1;
  var fontT = headS + "px Arial";
  ctx.font = fontT;
  var textYpos = textYpos + 0.06;
  };
  ctx.fillText(text.toUpperCase(),textXpos, textYpos);
} else {
  ctx.fillText(text.toUpperCase(),textXpos, 380)
};


//Main
//Background
ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
ctx.fillRect(0,460,1280,canvas.height)
//Watermark
  ctx.fillStyle = "rgba(250, 250, 250, 0.4)";
  ctx.font = "15px Lays"
  ctx.textAlign ="left"
  ctx.textBaseline="top"; 
  ctx.fillText("vk.com/dccomics25",1000,360);
//Text
function cal(ctx, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        var y = y;

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (words[n] == "—") {
            line = words[n] + ' ';
            y += lineHeight;
          }else if (testWidth > maxWidth && n > 0) {
          // ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        } 
        return y;
      } 
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        var y = y;

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (words[n] == "—") {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }else if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        } 
        ctx.fillText(line, x, y);
      }
      
      ctx.textAlign ="center"
      var maxWidth = 1190;
      var lineHeight = 60;
      var x = canvas.width/2;
      var y = 460;
      var text = document.getElementById("main").innerHTML.toUpperCase();
      ctx.font = lineHeight + "px Lays"
      ctx.fillStyle = 'white';

      if (cal(ctx, text, x, y, maxWidth, lineHeight)>720 - lineHeight) {
      while(cal(ctx, text, x, y, maxWidth, lineHeight)>720 - lineHeight) {
        var lineHeight = lineHeight - 0.1;
        ctx.font = lineHeight + "px Lays"
      }
      wrapText(ctx, text, x, y, maxWidth, lineHeight)
    } else {
      wrapText(ctx, text, x, y, maxWidth, lineHeight);
    }
  }
