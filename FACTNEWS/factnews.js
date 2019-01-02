
//Getting the image
function File() {
	document.getElementById('upload').click()
}
function handleFile(file) {
	const img = document.getElementById('img')
	img.src = window.URL.createObjectURL(file);
	img.onload = function() {
        window.URL.revokeObjectURL(this.src);
        handleInputs()
     }
     
}
function urlGo() {
	const src = document.getElementById('url').value
	const img = document.getElementById('img')
	img.src = src;
	img.onload = function() {
		handleInputs()
	}
	
}
//Handling text


function handleInputs() {
	const fact = {
		fontSize: 80,
		titleSize: 50,
	}
	fact.titleHeight = fact.fontSize*1.6;
	fact.lineHeight = fact.fontSize + 1
	fact.percent = 0.6
	fact.title = document.getElementById('title').value
	fact.text = document.getElementById('text').value
	fact.image = document.getElementById('img')
	createFact(fact)
}
//Canvas stuff
const canvas = document.getElementById('canvas')
function createFact(fact) {

	const ctx = canvas.getContext('2d')
	canvas.width = 1080
	canvas.height = 1080
	ctx.font = fact.fontSize + 'px Lays'
	ctx.textAlign = 'center'
	ctx.textBaseline = "top"; 

	//Background image
	if (true) {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.69)'
		ctx.drawImage(fact.image, 0, 0, canvas.width, canvas.height)
		ctx.fillRect(0,0, canvas.width, canvas.height)
	}
	//Front-end
	while (fact.image.width > canvas.width || fact.image.height > canvas.height) {
		console.log(fact.image.width)
		fact.image.width -= 0.1
		fact.image.height -= 0.1
	}
	if (true) {
		ctx.drawImage(fact.image, (canvas.width - fact.image.width)/2, (canvas.height - fact.image.height)/2, fact.image.width, fact.image.height)
	}

	//Drawing dark parts
	ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
	ctx.fillRect(0, canvas.height*fact.percent, canvas.width, canvas.height*fact.percent)
	while (calc(ctx, fact.text, canvas.width/2, canvas.height*fact.percent + 7, canvas.width - 20, fact.lineHeight) > canvas.height) {
		fact.fontSize -= 1;
		fact.lineHeight -= 1;
		ctx.font = fact.fontSize + 'px Lays'

		console.log(calc(ctx, fact.text, canvas.width/2, canvas.height*fact.percent + 7, canvas.width - 20, fact.lineHeight))
	
	}
	wrapText(ctx, fact.text, canvas.width/2, canvas.height*fact.percent + 7, canvas.width - 20, fact.lineHeight)
	//Title
	ctx.textBaseline = "middle"; 
	ctx.font = fact.titleSize + 'px Lays'
	ctx.fillStyle = 'rgba(0, 0, 13, 0.9)'
	ctx.fillRect(0, canvas.height*fact.percent - fact.titleHeight, canvas.width, fact.titleHeight)
	while (ctx.measureText(fact.title).width > canvas.width  - 20) {
		fact.titleSize -= 1
		ctx.font = fact.titleSize + 'px Lays'
	}
	ctx.fillStyle = 'white'
	ctx.fillText(fact.title, canvas.width/2, canvas.height*fact.percent - fact.titleHeight/2)
	//Watermark
	ctx.font = '15px Arial'
	ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
	ctx.rotate(90 * Math.PI / 180);
	ctx.fillText('vk.com/the_flash', 100, -10)
}


function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
	wrapShadow(ctx,text,x+3,y,maxWidth,lineHeight);
	wrapShadow(ctx,text,x-3,y,maxWidth,lineHeight);
	wrapShadow(ctx,text,x,y+3,maxWidth,lineHeight);
	wrapShadow(ctx,text,x,y-3,maxWidth,lineHeight);
	let words = text.replace(/\n/g, ' 普 ');
	words = words.split(' ');
	let line = '';
	ctx.fillStyle = 'white';

	for (let i = 0; i < words.length; i++) {
		let testLine = line + words[i] + ' ';
		let testLineLen = ctx.measureText(testLine).width;

		if (words[i] == '普') {
			line = line.replace(/普/g, '');
			ctx.fillText(line, x, y);
			line = words[i] + ' ';
			y += lineHeight;
		} else if (testLineLen > maxWidth && i > 0) {
			line = line.replace(/普/g, '');
			ctx.fillText(line, x, y);
			line = words[i] + ' ';
			y += lineHeight;
		} else  {
			line = testLine;
		}
	}
	line = line.replace(/普/g, '');
	ctx.fillText(line, x, y)
	};
function wrapShadow(ctx, text, x, y, maxWidth, lineHeight) {
	let words = text.replace(/\n/g, ' 普 ');
	words = words.split(' ');
	let line = '';
	ctx.fillStyle = 'black';

	for (let i = 0; i < words.length; i++) {
		let testLine = line + words[i] + ' ';
		let testLineLen = ctx.measureText(testLine).width;

		if (words[i] == '普') {
			line = line.replace(/普/g, '');
			ctx.fillText(line, x, y);
			line = words[i] + ' ';
			y += lineHeight;
		} else if (testLineLen > maxWidth && i > 0) {
			line = line.replace(/普/g, '');
			ctx.fillText(line, x, y);
			line = words[i] + ' ';
			y += lineHeight;
		} else {
			line = testLine;
		}
	}
	line = line.replace(/普/g, '');
	ctx.fillText(line, x, y)
};
function calc(ctx, text, x, y, maxWidth, lineHeight) {
	let words = text.replace(/\n/g, ' 普 ');
	words = words.split(' ');
	let line = '';

	for (let i = 0; i < words.length; i++) {
		let testLine = line + words[i] + ' ';
		let testLineLen = ctx.measureText(testLine).width;

		if (words[i] == '普') {
			line = line.replace(/普/g, '');
			line = words[i] + ' ';
			y += lineHeight;
		} else if (testLineLen > maxWidth && i > 0) {
			line = line.replace(/普/g, '');
			line = words[i] + ' ';
			y += lineHeight;
		} else {
			line = testLine;
		}
	}
	line = line.replace(/普/g, '');
	if (line.length > 1) {
		y += lineHeight;
	}
	return y;
}