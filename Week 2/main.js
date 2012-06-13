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
	
	//Find value of selected radio botton.
function getSelectedRadio(){
	var radio = document.forms[0].role;
	for(var i=0; i<radio.length; i++){
		if(radio[i].checked){
			roleValue = radio[i].value;
		}
	}
}


function toggleControls(n){
	switch(n){
		case "on":
			$('loveLog').style.display = "none";
			$('clear').style.display = "inline";
			$('displaylink').style.display = "none";
			$('addNew').style.display = "inline";
			break;
		case "off":
			$('loveLog').style.display = "block";
			$('clear').style.display = "inline";
			$('displaylink').style.display = "inline";
			$('addNew').style.display = "none";
			$('items').style.display = "none";
			break;
		default:
			return false;
	}
}


function storeData(){
	var id  			= Math.floor(Math.random()*1000000001);
	//Gather up all our form fiel value and store in an object.
	//Object properties contain array with the form lable and input value.
	getSelectedRadio();
	var item 				= {};
		item.eventTypes		= ["Event Type", $('eventTypes').value];
		item.title			= ["Event Title", $('title').value];
		item.location		= ["Location", $('location').value];
		item.date			= ["Event Date", $('date').value];
		item.role			= ["Role", roleValue];	
		item.wow			= ["Wow Factor", $('wow').value];
		item.notes			= ["The Details", $('notes').value];
		//Save data into Local Storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Love Log Saved!")
}

function getData(){
	toggleControls("on");
	if(localStorage.length === 0){
		alert("There are no logs in Local Storage.")
	}
	//Write Data from Local Storage to the browser.
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute("id", "items");
	var makeList = document.createElement('ul');
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	$('items').style.display = "display";
	for(var i = 0, len=localStorage.length; i<len; i++){
		var makeli = document.createElement('li');
		makeList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		//Convert the string from local storage value back to an abject by using JSON.parse()
		var obj = JSON.parse(value);
		var makeSublist = document.createElement('ul');
		makeli.appendChild(makeSublist);
		for(var n in obj){
			var makeSublistLi = document.createElement('li');
			makeSublist.appendChild(makeSublistLi);
			var optSubText = obj[n][0] + " " + obj[n][1];
			makeSublistLi.innerHTML = optSubText;
		}

	}
}

function clearLocal(){
	if(localStorage.length === 0){
		alert("There is no data to clear.")
	}else{
		localStorage.clear();
		alert("All love logs are deleted!");
		window.location.reload();
		return false;
	}
}

//Variable defaults
var eventTypes = ["--Choose An Event Type--", "Agape[of the soul]", "Eros[of passion]", "Philia[of the mind]", "Storge[parental]", "Xenia[hospitality]"],
	roleValue
;
makeCats();




//Set Link & Submit Click Events 
var displaylink = $('displaylink');
displaylink.addEventListener("click", getData);
var clearLink = $('clear');
clearLink.addEventListener("click", clearLocal);
var save = $('submit');
save.addEventListener("click", storeData);


});