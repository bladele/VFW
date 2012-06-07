// Assignment 2
// Visual Frameworks (VFW)
// Mobile Development
// Full Sail University
// Author: Bodunrin Ladele

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){




//getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

//Create select fiel element and populate with options.
function makeCats(){
	var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
		selectLi = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "eventTypes");
	for(var i=0, j=eventTypes.length; i<j; i++){
		var makeOption = document.createElement('option');
		var optText = eventTypes[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
	}
	selectLi.appendChild(makeSelect);
}

function storeData(){
	localStorage.setItem("test", "hello");
}

//Variable defaults
var eventTypes = ["--Choose An Event Type--", "Agape[of the soul]", "Eros[of passion]"];
makeCats();




//Set Link & Submit Click Events 
/*var displayLink = $('displaylink');
displayLink.addEventListener("click", getData);
var clearLink = $('clear');
clearLink.addEventListener("click", clearLocal);*/
var save = $('submit');
save.addEventListener("click", storeData);


});