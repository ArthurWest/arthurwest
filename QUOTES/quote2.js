'use strict';
for (var i = 0; i < document.getElementsByClassName("Iimg").length; i++) {
	document.getElementsByClassName("Iimg")[i].addEventListener("change", change);
	document.getElementsByClassName("Itext")[i].addEventListener("change", change);
}
function change() {
	for (var i = 0; i < document.getElementsByClassName("Iimg").length; i++) {
	if (document.getElementsByClassName("Iimg")[i].value != "") {
		document.getElementsByClassName("imgs")[i].src = document.getElementsByClassName("Iimg")[i].value;
	}
	document.getElementsByClassName("text")[i].innerHTML = document.getElementsByClassName("Itext")[i].value;
}
buttonGo(0);
}
function fileLoad(number) {
	let inputs = document.getElementsByClassName('inputFile');
	inputs[number].click();
}
function handle(files, number) {
	let imgs = document.getElementsByClassName('imgs');
	imgs[number].src = window.URL.createObjectURL(files[0]);
	imgs[number].onload = function () {
		window.URL.revokeObjectURL(this.src);
	};
	setTimeout(function () {
		document.getElementsByTagName('button')[0].click();
	}, 100)

}
//Program itself
var color1 = "rgb(0, 153, 51)";
var color2 = "rgb(0, 153, 255)";
var color3 = "rgb(204, 0, 204)";
var color4 = "rgb(255, 153, 51)";
//Coloring
var button = document.getElementsByTagName('button');
for (var i = 0; i < button.length; i++) {
	var buttonStyle = document.getElementsByTagName('button')[i].style.background;
	if (i == 0 || i == 4 || i == 8 ||  i == 12) {
		document.getElementsByTagName('button')[i].style.background = color1;
	} else if (i == 1 || i == 5 || i == 9 ||  i == 13) {
		document.getElementsByTagName('button')[i].style.background = color2;
	} else if (i == 2 || i == 6 || i == 10 ||  i == 14) {
		document.getElementsByTagName('button')[i].style.background = color3;
	} else {
		document.getElementsByTagName('button')[i].style.background = color4;
	}
}
for (var i = 0; i < document.getElementsByClassName("inp").length; i++) {
	document.getElementsByClassName("inp")[i].style.background = color1;
}
//Go function
var canvasHeight = 1440;
function buttonGo(numbr) {
	canvasHeight = 1440;
	var inp = document.getElementsByClassName('inp');
	
	if (numbr <= 3) {
		inp[0].style.background = document.getElementsByTagName("button")[numbr].style.background;
	} else if (numbr <= 7) {
		inp[1].style.background = document.getElementsByTagName("button")[numbr].style.background;
	} else if (numbr <= 11) {
		inp[2].style.background = document.getElementsByTagName("button")[numbr].style.background;
	} else {
		inp[3].style.background = document.getElementsByTagName("button")[numbr].style.background;
	}
	if (inp[2].style.background == color1) {
		canvasHeight = 720;
	}
	canvas();
}
function canvas(argument) {
	//General settings
	var canvas = document.getElementsByTagName("canvas")[0];
	var ctx = canvas.getContext("2d");

	canvas.width = 1280;
	canvas.height = canvasHeight;
	//Settings for imgs
	var imgs = [];
	for (var i = 0; i < document.getElementsByClassName("imgs").length; i++) {
		imgs.push(document.getElementsByClassName("imgs")[i]);
	}
	var colors = [];
	for (var i = 0; i <  document.getElementsByClassName('inp').length; i++) {
		colors.push(document.getElementsByClassName('inp')[i].style.background);
	}
	//Text images
	var font = 40;
	ctx.font= font +"px Arial";
	ctx.textAlign="center";
	ctx.textBaseline="bottom"; 
	ctx.fillStyle = "white";
	var firstColor = "white";
	var text = document.getElementById("text1").innerHTML;
	var x = 640;
	var maxWidth = 1280;
	var lineHeight = font + 2;
	var y = 720;
	//Rendering first picture
	if (colors[1] == color1) {
		ctx.drawImage(imgs[0],0,0,1280, 720);
		cheking(ctx,text,x,y,maxWidth,lineHeight);
	} else {
		var point = document.getElementById('number1').value;
		ctx.drawImage(imgs[0],point, 0,640,720,0,0,640,720);
		x = 320;
		y = 720;
		maxWidth = 630;
		cheking(ctx,text,x,y,maxWidth,lineHeight);
	}
	//Second image
	text = document.getElementById("text2").innerHTML;
	if (colors[1] == color2) {
		point = document.getElementById('number2').value;
		ctx.drawImage(imgs[1],point,0,640,720,640,0,640,720);
		x = canvas.width - canvas.width/4;
		y = 720;
		maxWidth = 630;
		cheking(ctx,text,x,y,maxWidth,lineHeight);
	} else if (colors[3] == color2) {
		ctx.drawImage(imgs[1], 0, 720)
		x = canvas.width/2;
		y = 1440;
		cheking2(ctx,text,x,y,maxWidth,lineHeight);
	} else {
		point = document.getElementById('number2').value;
		ctx.drawImage(imgs[1],point,0,640,720,0,720,640,720);
		x = canvas.width/4;
		y = 1440;
		maxWidth = 630;
		cheking2(ctx,text,x,y,maxWidth,lineHeight);
	}
	//Third image
	text = document.getElementById("text3").innerHTML;
	if (colors[2] == color3 && colors[3] == color3) {
		ctx.drawImage(imgs[2],0,720);
		x = canvas.width/2;
		y = 1440;
		maxWidth = 1260;
		cheking2(ctx,text,x,y,maxWidth,lineHeight);
	} else if (colors[2] == color3) {
		point = document.getElementById('number3').value;
		ctx.drawImage(imgs[2],point,0,640,720,0,720,640,720);
		x = canvas.width/4;
		y = 1440;
		maxWidth = 640;
		cheking2(ctx,text,x,y,maxWidth,lineHeight);
	} else if (colors[3] == color3) {
		point = document.getElementById('number3').value;
		ctx.drawImage(imgs[2],point,0,640,720,640,720,640,720);
		x = canvas.width - canvas.width/4;
		y = 1440;
		maxWidth = 640;
		cheking2(ctx,text,x,y,maxWidth,lineHeight);
	}
	//Fourth picture
	text = document.getElementById("text4").innerHTML;
	if (colors[3] == color4) {
		point = document.getElementById('number4').value;
		ctx.drawImage(imgs[3],point,0,640,720,640,720,640,720);
		x = canvas.width - canvas.width/4;
		y = 1440;
		maxWidth = 640;
		cheking2(ctx,text,x,y,maxWidth,lineHeight);
	}
	//Watermark
	 ctx.save();
	 ctx.font = "15px Arial";
	 ctx.rotate(90 * (Math.PI / 180));
	 ctx.textAlign = "center";
	 ctx.fillText("vk.com/dccomics25", 400, 0);
	 ctx.restore();
	//Funtions
	function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
		wrapShadow(ctx,text,x+3,y,maxWidth,lineHeight);
		wrapShadow(ctx,text,x-3,y,maxWidth,lineHeight);
		wrapShadow(ctx,text,x,y+3,maxWidth,lineHeight);
		wrapShadow(ctx,text,x,y-3,maxWidth,lineHeight);
	        let words = text.replace(/\n/g, ' 普 ');
			words = words.split(' ');
	        var line = '';
	        ctx.fillStyle = "white";

	        for(var n = 0; n < words.length; n++) {
	          var testLine = line + words[n] + ' ';
	          var metrics = ctx.measureText(testLine);
	          var testWidth = metrics.width;
	          if (words[i] == '普') {
				line = line.replace(/普/g, '');
				ctx.fillText(line, x, y);
				line = words[i] + ' ';
				y += lineHeight;
	          } else if (testWidth > maxWidth && n > 0) {
	            ctx.fillStyle = firstColor;
	            ctx.fillText(line, x, y);
	            line = words[n] + ' ';
	            y += lineHeight;
	          } else {
	            line = testLine;
	          }
	        }
	        ctx.fillStyle = firstColor;
	        ctx.fillText(line, x, y);
	      };
	function wrapShadow(ctx, text, x, y, maxWidth, lineHeight) {
	        var words = text.split(' ');
	        var line = '';
	        ctx.fillStyle = "black";
	        ctx.lineWidth=2;
			ctx.font= font + 0.3 +"px Arial";

	        for(var n = 0; n < words.length; n++) {
	          var testLine = line + words[n] + ' ';
	          var metrics = ctx.measureText(testLine);
	          var testWidth = metrics.width;
	          if (words[n] == "—") {
	            ctx.fillText(line, x, y);
	            line = words[n] + ' ';
	            y += lineHeight;
	          } else if (testWidth > maxWidth && n > 0) {
	            ctx.fillText(line, x, y);
	            line = words[n] + ' ';
	            y += lineHeight;
	          } else {
	            line = testLine;

	          }
	        }
	        ctx.fillText(line, x, y);
	      };
	function calc(ctx, text, x, y, maxWidth, lineHeight) {
	        let words = text.replace(/\n/g, ' 普 ');
			words = words.split(' ');
	        var line = '';

	        for(var n = 0; n < words.length; n++) {
	          var testLine = line + words[n] + ' ';
	          var metrics = ctx.measureText(testLine);
	          var testWidth = metrics.width;
	          if (words[i] == '普') {
				line = line.replace(/普/g, '');
				line = words[i] + ' ';
				y += lineHeight;
	          } else if (testWidth > maxWidth && n > 0) {
	            line = words[n] + ' ';
	            y += lineHeight;
	          } else {
	            line = testLine;
	          }
	        }
	        if (line.length > 1) {
	        	y -= lineHeight;
	        }
	        return y;
	      };

	function cheking(ctx,text,x,y,maxWidth,lineHeight) {
		var lineHeightX = 2;
		if (calc(ctx,text,x,y,maxWidth,lineHeight) > 1080) {
			while (calc(ctx,text,x,y,maxWidth,lineHeight) > 1080) {
				font = font - 1;
				lineHeight = font + 2;
				ctx.font = font + "px Arial";
			}
			lineHeightX = 1;
		}
		var y = 720 - (calc(ctx,text,x,y,maxWidth,lineHeight) - 720) - lineHeight*lineHeightX;
		wrapText(ctx,text,x,y,maxWidth,lineHeight);
	}
	function cheking2(ctx,text,x,y,maxWidth,lineHeight) {
		var lineHeightX = 2;
		if (calc(ctx,text,x,y,maxWidth,lineHeight) > 1800) {
			while (calc(ctx,text,x,y,maxWidth,lineHeight) > 1800) {
				font = font - 1;
				lineHeight = font + 2;
				ctx.font = font + "px Arial";
			}
			lineHeightX = 1;
		}
		var y = 1440 - (calc(ctx,text,x,y,maxWidth,lineHeight) - 1440) - lineHeight*lineHeightX;
		wrapText(ctx,text,x,y,maxWidth,lineHeight);
	}
}