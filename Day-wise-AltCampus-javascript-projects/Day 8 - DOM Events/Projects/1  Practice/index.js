//Select the section with an id of container without using querySelector.

var containerId = document.getElementById("container");

//Select the section with an id of container using querySelector.

var containerSelector = document.querySelector("#container");

//Select all of the list items with a class of "second".

var secondClass = document.getElementsByClassName("second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

var thirdClass = containerSelector.lastElementChild.getElementsByClassName("third")[0];

//Give the section with an id of container the text "Hello!".

containerId.style.textContent = "Hello!" ;

//Add the class main to the div with a class of footer.

var footer = document.getElementsByClassName("footer")[0];
footer.classList.add("main");

//Remove the class main on the div with a class of footer.

footer.classList.remove("main");


//Create a new li element.

var createLi = document.createElement("li");


//Give the li the text "four".

createLi.textContent = "four";

//Append the li to the ul element.


containerSelector.firstElementChild.append(createLi);


//Loop over all of the list inside the ol tag and give them a background color of "green".

var ol = containerSelector.lastElementChild.children;

for (item of ol) {
  item.style.background = "green";
}

//Remove the div with a class of footer.

footer.remove();