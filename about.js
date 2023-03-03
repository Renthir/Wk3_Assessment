console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form Submitted Successfully')

}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover', () => {alert('You are pretty great!')})