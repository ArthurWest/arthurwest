let help = document.getElementsByClassName('help');
let helpText = document.getElementsByClassName('alert-primary');
let go = document.getElementsByClassName('go');
for (let i = 0; i < help.length; i++) {
	help[i].setAttribute('number', i);
	help[i].setAttribute('state', 'closed');
}
for (let i = 0; i < help.length; i++) {
	help[i].addEventListener('click', function() {
		let number = this.getAttribute('number');
		let borderRadius = '2rem';
		if (this.getAttribute('state') == 'closed') { // If closed  
			helpText[number].style.display = 'block'; //HelpText visible
			this.setAttribute('state', 'open') //Change atr to OPEN
		} else { //If open  
			helpText[number].style.display = 'none';
			this.setAttribute('state', 'closed')
		}
	})
}
//Links
let links = [
	'QUOTES/quote.html'
]
for (let i = 0; i < go.length; i++) {
	go[i].setAttribute('number', i);
	go[i].addEventListener('click', function() {
		window.open(links[i] ,'_blank');
	})
}