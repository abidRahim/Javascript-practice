var arr = [];

var add = document.getElementById("addList");
var input = document.getElementById("user-input");

// var add = document.getElementsByClassName("add")[0];

add.addEventListener("click", handleList);
add.addEventListener("click", deleteTodo);


function addTodo() {
  if( input.value === "") return;
  
  // var randomId = Math.floor(Math.random() * 900000 + 100000);
  var randomId = Date.now();
                                        
  arr.push( { todo: input.value, checked: false, id: randomId } );

  input.value = "";
  displayTodo();
}

function completed() {
  var completedTask = arr.filter( elem => elem.checked == true);

  return completedTask;
}

function remaining() {
  var remainingTask = arr.filter( elem => elem.checked == false);

  return remainingTask;
}


// Displaying the list
function displayTodo() {
  add.innerHTML = "";
  arr.forEach(elem => {
    add.innerHTML += 
    `<li class="list-node"><input data-id="${elem.id}" type="checkbox" ${elem.checked ? "checked" : ""}><label class= "${elem.checked ? "label" : ""}" data-id="${elem.id}">${elem.todo}</label><span data-id="${elem.id}" class="delete fas fa-times"></span></li>`;
  });
  }
  
  
// Event listener function to select the respective id and toggle the checked property
function handleList(e) {
  if(e.target.localName !== 'input') return;
  const	id = e.target.dataset.id;

  toggleTodo(id);
  displayTodo();
}	


// Checking the checked property of the ToDo.
function toggleTodo(id) {
  arr.forEach(elem => {
    if (id == elem.id) {
      elem.checked = !elem.checked;
    }
  });
}

function deleteTodo(e) {
  if(e.target.nodeName !== "SPAN") return;
  
  // e.target.parentNode.remove();

  const	id = e.target.dataset.id;

  removeTodoArr(id);
}

function removeTodoArr (del_id) {
  arr = arr.filter( (item) => item.id != del_id );

  displayTodo();
}