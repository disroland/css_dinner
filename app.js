'use strict'

// new list item
let list = document.querySelector('.main-mnu');
let li1 = document.createElement('div');
li1.className ='mnu';
li1.innerHTML = '<p> <input type="checkbox" name="d7" id="d7"/><label for="d7"><span> Something else <span class="small-text">(just for fun )</span></span></label></p>'
list.appendChild(li1);

// remove button
let mnuItems = document.querySelectorAll('.mnu');

for (let i=0; i<mnuItems.length; i++){
	let rem = document.createElement('button');
	rem.innerText = 'remove';
	rem.className = 'rem';
	mnuItems[i].appendChild(rem)
}
let rem2 = document.querySelectorAll('.rem');
for (let j=0;j<rem2.length;j++){
rem2[j].onclick = function (){
	let target = this.closest('.mnu');
	console.log(target);
	target.remove();
	
}
}

// forms
let main = document.querySelector('main');
let  forma = document.createElement('form');
forma.className = 'form';
let input = document.createElement('input');
input.type='text';
let btn = document.createElement('button');
btn.innerText = 'send'
forma.appendChild(input);
forma.appendChild(btn);
main.appendChild(forma);

// new list element creating
btn.onclick = function(){

	let last = document.querySelector('.mnu:last-of-type');
	let liNew = last.cloneNode(true);
	mnuItems=document.querySelectorAll('.mnu');
	if (input.value){
	list.appendChild(liNew);
	let S = mnuItems.length;
	liNew.innerHTML = `<p> <input type="checkbox" name="d${S + 1}" id="d${S + 1}"/><label for="d${S + 1}"><span> ${input.value}</span></label></p>`;
	// liNew.appendChild(rem2);
		let rem = document.createElement('button');
	rem.innerText = 'remove';
	rem.className = 'rem';
	liNew.appendChild(rem);
	newRemove();
	input.value = '';
	return false;
}
	return false;
}

function newRemove (){

let rem2 = document.querySelectorAll('.rem');
for (let j=0;j<rem2.length;j++){
rem2[j].onclick = function (){
	let target = this.closest('.mnu');
	console.log(target);
	target.remove();
	
}
}
}
// mouse
let hiddenInfo = document.querySelector('.hidden-info');
input.onfocus = function(){
	hiddenInfo.classList.add('visible');
}
input.onblur = function(){
	hiddenInfo.classList.remove('visible');
}
