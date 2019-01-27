var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function onListElementClick(event)
{
	console.log("event: " + event);  
	console.log("event.target.nodeName: " + event.target.nodeName);
	//chce zeby dalo sie przekreslic element listy
	//warunek if klikania
	//listElement.classList.contains(class);

	//find actual element

	var listElement = document.querySelector("li");

	if(listElement.classList.contains("done"))
	{
		listElement.classList.remove("done");	
	}
	else {
		listElement.classList.add("done");
	}
}


ul.addEventListener("click", onListElementClick);

function inputLength() {
	return input.value.length;
}


function addDeleteButton()
{
	var btn = document.createElement("button");
	var t = document.createTextNode("delete");
	btn.classList.add("deletebtn");
	btn.addEventListener("click", deleteListElement);
	btn.appendChild(t);
	document.body.appendChild(btn);

}
//chce by delete button byl obok nowego li, nie pod
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addDeleteButton(); 
	input.value = "";

	
}
//chce by delete button znikal wraz z ostatnim elementem, ktory zostanie skasowany
function deleteListElement()
{ 
	var lastElement = ul.lastElementChild;
	lastElement.parentNode.removeChild(lastElement);
	removeDeleteButton();
}
function removeDeleteButton()
{
	var removeDeleteButton = document.getElementByClassName("deletebtn");
	removeDeleteButton.parentNode.removeChild(removeDeleteButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);