// 'use strict';
//Datalist
const avas = {
	"Аквамен": 'avas/аквамен.jpg',
	"Бэтмен": 'avas/бэтмен.jpg',
	"Найтвинг": 'avas/найтвинг.jpg',
	"Супермен": 'avas/супермен.jpg',
	"Флэш": 'avas/флэш.jpg',
	"Чудо-Женщина": 'avas/чудо-женщина.jpg',
	"Зелёная Стрела": 'avas/зелёная стрела.jpg',
	"Зелёный Фонарь": 'avas/зелёный фонарь.jpg',
	"Робин (Тим)": "avas/робин.jpg",
	"Супербой (Коннор)": "avas/супербой.jpg",
	"Супергёрл": "avas/супергёрл.jpg",
	"Шазам": "avas/шазам.jpg",
	"Капитан Марвел": "avas/капитан марвел.jpg",
	"Чёрная Молния": "avas/чёрная молния.jpg",
	"Питер Гамби": "avas/питер гамби.jpg",
};
let datalist = document.getElementById('data');
for (x in avas) {
	let option = document.createElement('option');
	option.value = x;
	datalist.appendChild(option);
}
//Events
for(let i = 0; i < document.getElementsByClassName('text').length; i++) {
  document.getElementsByClassName('text')[i]
    .addEventListener('change', avasF)};
for(let i = 0; i < document.getElementsByClassName('name').length; i++) {
  document.getElementsByClassName('text')[i]
    .addEventListener('change', avasF)};
document.addEventListener('click', avasF);
//Avas pars
function avasF() {
	for (let i = 0; i < 4; i++) {
		for (let i = 0; i < document.getElementsByClassName('name').length; i++) {
			let value = document.getElementsByClassName('name')[i].value;
			if (value in avas) {
				document.getElementsByClassName('ava')[i].src = avas[value];
			}
		}
	}
	double();
}
//Drawing part
function double() {
	for (var i = 0; i < 2; i++) {
		main();
	}
}
function main() {
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = document.getElementById('height').innerHTML;

ctx.textBaseline="alphabetic"; 
ctx.textAlign="start"; 
const font = 25;
ctx.font = font+'px San Francisco';
const messagePadding = font;
const picturePadding = 110;
class Message {
	constructor(text, first, y, ava) {
		this.text = text;
		this.first = first;
		this.y = y;
		//Text decoration staff
		this.fontSize = font;
		this.maxWidth = canvas.width - canvas.width/4;
		this.lineHeight = this.fontSize + 5;
		this.ava = ava;
	} // end of the constucotr
	get rectHeight() {
		return cal(ctx, this.text, this.x, this.y, this.maxWidth, this.lineHeight);
	};
	get rectWidth() {
		if (ctx.measureText(this.text).width < this.maxWidth) {
			return ctx.measureText(this.text).width;
		} else {
			return this.maxWidth;
		}
	};
	get x() {
		if (this.first) {
			return picturePadding;		
		} else {
			return (canvas.width - this.rectWidth) - picturePadding - 30;
		}
	}
};
//Input
let messages = [];
for (var i = 0; i < document.getElementsByClassName('text').length; i++) {
	if (i == 0) {
		messages.push(new Message(document.getElementsByClassName('text')[i].value, document.getElementsByClassName('check')[0].checked, messagePadding*3, document.getElementsByClassName('ava')[i]));
	} else {
		messages.push(new Message(document.getElementsByClassName('text')[i].value, document.getElementsByClassName('check')[i].checked, messages[i-1].y + messages[i - 1].rectHeight + messagePadding+messagePadding*1/2, document.getElementsByClassName('ava')[i]));
	} 
}
//Drawing TOP
var grd=ctx.createLinearGradient(0,0,canvas.width, messagePadding*2);
grd.addColorStop(0,"white");
grd.addColorStop(0.4,"rgba(237, 246, 249, 1)");
grd.addColorStop(0.5,"rgb(227, 244, 252)");
grd.addColorStop(0.6,"rgba(237, 246, 249, 1)");
grd.addColorStop(1,"white");

ctx.textAlign ="center";
ctx.fillStyle=grd;
ctx.fillRect(0,0,canvas.width,messagePadding*2);
ctx.fillStyle = 'rgba(188, 189, 190, 1)';
ctx.lineWidth = 0.5;
ctx.strokeRect(0,0,canvas.width,messagePadding*2);
ctx.fillStyle = "#1685fd"; // Blue color
ctx.textBaseline="middle"; 
ctx.fillText('Сообщения', canvas.width/6, messagePadding);
ctx.fillStyle = "black"; // Black color
ctx.font = font*1.5+ 'px San Francisco';
ctx.fillText(document.getElementById('name').value, canvas.width/2, messagePadding);
ctx.font = font+ 'px San Francisco';
ctx.fillStyle = "#1685fd"; // Blue color
ctx.fillText('Контакты', canvas.width - canvas.width/6, messagePadding);
ctx.textBaseline="alphabetic"; 
ctx.textAlign ="start";
//Messages
for (var i = 0; i < messages.length; i++) {
	if (messages[i].text != '') {
		draw(messages[i]);
	}
}
function draw(message) {
	//Variables
	const rectWidth = message.rectWidth + message.fontSize;
	const rectHeight = message.rectHeight;
	const rectX = message.x;
	const rectY = message.y;
	const cornerRadius = 15;
	const first = message.first;

	ctx.beginPath(); //Begin path
	ctx.moveTo(rectX + cornerRadius, rectY); //Starting point(subpath)
	ctx.lineTo(rectX + rectWidth - cornerRadius, rectY); //Top line
	if (!first) { //Top right thing
		ctx.lineTo(rectX + rectWidth + cornerRadius, rectY);
		ctx.lineTo(rectX + rectWidth , rectY + cornerRadius);
	} else {
		ctx.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius); //Top right arc
	}
	ctx.lineTo(rectX + rectWidth, rectY + rectHeight - cornerRadius);// right line 
	ctx.arcTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - cornerRadius, rectY + rectHeight, cornerRadius); // bottom right arc
	ctx.lineTo(rectX + cornerRadius, rectY + rectHeight); // bottom line
	ctx.arcTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - cornerRadius, cornerRadius); // left bottom arc
	ctx.lineTo(rectX, rectY + cornerRadius); //Left line
	if (first) { // Top left thing
		ctx.lineTo(rectX - cornerRadius, rectY);
		ctx.lineTo(rectX + cornerRadius, rectY);
		ctx.drawImage(message.ava,10, rectY,75,75); //Ava
	} else {
		ctx.arcTo(rectX, rectY, rectX + cornerRadius, rectY, cornerRadius); // top left arc
		ctx.drawImage(message.ava, canvas.width - 85, rectY,75,75);
	}
	

	//Cling path
	if (!first) {
		ctx.fillStyle = "#1685fd";
	} else {
		ctx.fillStyle = '#dfdee4';
	}
	ctx.fill(); //STROKE

	if (!first) {
		ctx.fillStyle = 'white';
	} else {
		ctx.fillStyle = 'black';
	};

	wrapText(ctx, message.text, rectX + message.fontSize/2, rectY + message.fontSize + 5, message.maxWidth, message.lineHeight);
	document.getElementById('height').innerHTML = rectY + rectHeight + messagePadding*2;

}
// document.onclick = function(e){
// 	console.log("mouse location:", e.clientX, e.clientY)
// }
// Functions for text 
function cal(ctx, text, x, y, maxWidth, lineHeight) {
		if (ctx.measureText(text).width <= maxWidth) {
			return font + messagePadding;
		}
        var words = text.split(' ');
        var line = '';
        var startY = y;

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (words[n] == "—") {
            line = words[n] + ' ';
            y += lineHeight;
          } else if (testWidth > maxWidth && n > 0) {
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        if (line.length>1) {
        	y += lineHeight;
        } 
        return y - startY + font/3 + messagePadding/2;
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
}
main();