var arrayList = ["Javascript", "SCSS", "HTML5", "Awesome DnD", "Follow me"];

var userList = document.querySelector("#user-list");
var ulList = document.querySelector(".add-list");




function addList(e) {
  if (e.keyCode != 13) return;
  
  if ( /^ *$/.test(userList.value)) return;

  arrayList.push(userList.value);

  userList.value = "";  

  displayList(arrayList, ulList);
}

function displayList(thisArray, elm) {
  elm.innerHTML = thisArray.map( (val, index) => {
    return `<li class="list-item" id=${index} draggable="true"><p  id=${index} class"list-value">${val}</p><span id=${index} class="drag">Drag me</span></li>`
  }).join('');

  for(item of ulList.children) {
   
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
   
  }
}

var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';
    
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML)
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); 
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over'); 
}

function handleDrop(e) {

  if (e.stopPropagation) {
    e.stopPropagation(); 
  }

  if (dragSrcEl != this) {
  
  dragSrcEl.innerHTML = this.innerHTML;
  this.innerHTML = e.dataTransfer.getData('text/html');
  }
  
  return false;
}

function handleDragEnd(e) {
  let children = ulList.children;

  [...children].forEach( (item) => {
    item.classList.remove('over');
  });

  this.style.opacity = '1';
}


displayList(arrayList, ulList);

userList.addEventListener('keyup', addList);

