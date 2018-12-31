'use strict';
//Taking variables
function change() {
	for (var b = 1; b <= 10; b++) {
document.getElementById("name"+b).innerHTML = document.getElementById("Iname"+b).value;
var ava1inp = document.getElementById("Iava"+b).value.toLowerCase();
	if (ava1inp == "бэтмен" ||ava1inp == "флэш" ||ava1inp == "супермен" ||ava1inp == "чудо-женщина" ||ava1inp == "найтвинг" ||ava1inp == "аквамен") {
		var ipuh = "avas/" + ava1inp + ".jpg";
		document.getElementById("ava"+b).setAttribute("src", ipuh);
	} else {
		document.getElementById("ava"+b).setAttribute("src", document.getElementById("Iava"+b).value);
	};
document.getElementById("text"+b).innerHTML = document.getElementById("Itext"+b).value;
document.getElementById("img"+b).setAttribute("src", document.getElementById("Iimg"+b).value)
if (document.getElementById("name"+b).innerHTML != "" && document.getElementById("ava"+b).getAttribute("src") != "" && document.getElementById("text"+b).innerHTML != "") 
{canvas(b);
canvas(b);
canvas(b);}}
}
//Taking date
var d = new Date();
var months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
document.getElementById("date").innerHTML = d.getDate() +" "+months[d.getMonth()] +" " + d.getFullYear();
//Canvas
function canvas(i) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 800;
	canvas.height = Number(document.getElementById("z").innerHTML)+30;
	
	//Function
	var z = -30;
	function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

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
       z = y;       
      };

//Ava
for(var a = 1; a <= i; a++) {
var ava = document.getElementById("ava"+a);
ctx.drawImage(ava,10,z+40,75,75);
		
ctx.fillStyle = "#0000ff";
ctx.font = "30px Tahoma";
ctx.textAlign = "left";
ctx.textBaseline = "top"; 
//Name
var name = document.getElementById("name"+a).innerHTML.toUpperCase();
ctx.fillText(name, 95, z+40)
//Date 
ctx.fillStyle = "#a6a6a6";
ctx.font = "20px Tahoma";

var date = document.getElementById("date").innerHTML + " vk.com/dccomics25";
ctx.fillText(date, 95, z+80)

// Message 1
var text = document.getElementById("text"+a).innerHTML;
var mes1x = 10;
var mes1y = z+140;
var maxWidth = 800;
var lineHeight = 30;

ctx.fillStyle = "black";
ctx.font = "30px Tahoma";
ctx.textAlign = "left";
ctx.textBaseline="middle"; 

wrapText(ctx,text,mes1x,mes1y,maxWidth,lineHeight);
document.getElementById("z").innerHTML = z;

if (document.getElementById("img"+a).getAttribute("src") != "") {
	var img = document.getElementById("img"+a);
	if (img.width > 800) {
		var k = img.height / img.width;
		var Hei = img.height;
		for (var Wid = img.width;Wid>canvas.width;Wid = Wid - 1) {
		}
		ctx.drawImage(img,0,z+30,Wid,k*Hei)
	} else {
		ctx.drawImage(img,0,z+30,Wid,k*Hei)
	}
	document.getElementById("z").innerHTML = z + k*Hei;
};
z = Number(document.getElementById("z").innerHTML);
ctx.fillStyle = "#d9d9d9";
ctx.fillRect(0,z+30,canvas.width,3)
}};
