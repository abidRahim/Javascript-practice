let arr = [
  {list: "Javascript", id: 0},
  {list: "HTML5", id: 1},
  {list: "SCSS", id: 2},
  {list: "Follow Me", id: 3}  
];
const input = document.getElementById('user-input');
const ulList = document.getElementById('todo-lists');


function addList(e) {
  if(e.keyCode != 13) return;

  if( /^ *$/.test(input.value)) return;

  let todo = input.value;
  let id = Date.now();

  arr.push({list: todo});

  input.value = "";
  displayList(arr, ulList);
}

function displayList(thisArr, elm) {
  
  elm.innerHTML = thisArr.map( (val, index) => {
    thisArr[index].id = index;

    return `<li class="list box" draggable="true"><p data-id=${index}>${val.list}</p><span class="drag" data-id=${index}>drag me</span></li>`;
  }).join('');
}

displayList(arr, ulList);

input.addEventListener('keyup', addList);

function handleDragStart(e) {
  this.style.opacity = '0.4';  
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDrop(e) {
  if (e.stopPropagation()) {
    e.stopPropagation();
  }

  return false;
}

function handleDragEnd(e) {

}

function handleDragLeave(e) {
  this.classList.remove('over'); 
}


for(item of ulList.children) {
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  item.addEventListener('dragleave', handleDragLeave, false);
  item.addEventListener('dragleave', handleDragLeave, false);
  item.addEventListener('drop', handleDrop, false);
  item.addEventListener('dragend', handleDragEnd, false);
}


