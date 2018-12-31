'use strict';

// Функция самой измены изображения
// window.onload = function () {
	function go() {
	var x = document.getElementById("num").value;
	var canvas = document.getElementById("dcCan");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("photo");
	ctx.drawImage(img,0,0,1280,720);
	if (x == 1) {
		var gen = document.getElementById("flash");
	} else if (x == 2) {
		var gen = document.getElementById("lzd");
	} else if (x == 3) {
		var gen = document.getElementById("river");
	} else if (x == 4) {
		var gen = document.getElementById("krypton");
	} else if (x == 5) {
		var gen = document.getElementById("arrow");
	} else if (x == 6) {
		var gen = document.getElementById("supergirl");
	} else if (x == 7) {
		var gen = document.getElementById("bl");}
	ctx.drawImage(gen,0,0,1280,720);
}

function go1() {
	var canvas = document.getElementById('dcCan'),  
	ctx = canvas.getContext("2d");

	var ctx = canvas.getContext("2d");
	var img = document.getElementById("photo");
	var gen = document.getElementById("photo2");
	ctx.drawImage(img,0,0,1280,720);
	ctx.drawImage(gen,0,0,1280,720);

	var tef = document.getElementById("tef").value; // вот "значение" инпута
	ctx.fillStyle = "#ffcc00"
	ctx.font = "bold 100px Oswald";
	ctx.textAlign = "center"; 
	ctx.fillText(tef,1280/2,650,1100); // а вот "вывод" на экран

	ctx.font = "bold 100px Oswald";
	ctx.lineWidth=3;
	ctx.strokeText(tef,1280/2,649,1100);

}

//Getting URL
function url() {
	document.getElementById("photo").src = document.getElementById("url").value;
}
//On advance 
function onAdv() {
	document.getElementById("div").style.display = "block";
}
//Something about input
function change() {
document.getElementById("text").innerHTML = document.getElementById("Itext").value;
document.getElementById("font").innerHTML = document.getElementById("Ifont").value;
document.getElementById("color").innerHTML = document.getElementById("Icolor").value;
document.getElementById("y").innerHTML = document.getElementById("Iy").value;
document.getElementById("shadow").innerHTML = document.getElementById("Ishadow").value;
}

document.getElementById("Itext").addEventListener("change", ver2);
document.getElementById("Ifont").addEventListener("change", ver2);
document.getElementById("Icolor").addEventListener("change", ver2);
document.getElementById("Iy").addEventListener("change", ver2);
document.getElementById("Ishadow").addEventListener("change", ver2);
// Advance settings
function ver2() {
	var canvas = document.getElementById('dcCan');
	var ctx = canvas.getContext("2d");

	var text = document.getElementById("text").innerHTML;
	var tesTex = text + "";
	var font = document.getElementById("font").innerHTML + "px Action";

	var img = document.getElementById("photo");
	ctx.drawImage(img,0,0,1280,720);

	var onImg = document.getElementById("clear");
	ctx.drawImage(onImg,0,0,1280,720);
// Wrap
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
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
//Cool
	var shadow = document.getElementById("shadow").innerHTML;
	var posY = document.getElementById("y").innerHTML;

	ctx.fillStyle = "black";
	ctx.font = font;
	ctx.textAlign = "center";
	ctx.textBaseline = "top";

	// ctx.fillText(text,Number.parseInt(canvas.width/2)+Number.parseInt(shadow),Number.parseInt(posY)+Number.parseInt(shadow));
	// ctx.fillStyle = document.getElementById("color").innerHTML;
	
	// ctx.fillText(text,canvas.width/2,posY)

	var maxWidth = 1100;
	var lineHeight = Number.parseInt(document.getElementById("font").innerHTML);

	wrapText(ctx,text,Number.parseInt(canvas.width/2)+Number.parseInt(shadow),Number.parseInt(posY)+Number.parseInt(shadow), maxWidth,lineHeight);
	
	ctx.fillStyle = document.getElementById("color").innerHTML;	
	wrapText(ctx,text,canvas.width/2,Number.parseInt(posY),maxWidth,lineHeight)
};