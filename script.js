var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");

	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("Delete"));


	ul.appendChild(li);
	li.appendChild(deleteButton);
	input.value = "";
	  
	addClickEvent(li); // Add click event listener to the newly created item
	addDeleteEvent(deleteButton);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

function markItemComplete() {
	this.classList.toggle("done");
}

function addClickEvent(item) {
	item.addEventListener("click", markItemComplete);
}

function deleteListItem() {
	var listItem = this.parentNode;
	ul.removeChild(listItem);
}

function addDeleteEvent(button) {
	button.addEventListener("click", deleteListItem)
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);


for (var i = 0; i < listItems.length; i++) {
  addClickEvent(listItems[i]);

var deleteButton = document.createElement("button");
deleteButton.appendChild(document.createTextNode("Delete"));

listItems[i].appendChild(deleteButton);
addDeleteEvent(deleteButton);
}
