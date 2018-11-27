document.addEventListener('click', colorHandler);

var letters = "0123456789ABCDEF"; 
var color = '#';

var elem = document.body.firstElementChild;

function colorHandler(e) {
  for (var i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 15))];
  }

  e.target.style.backgroundColor = color;
  console.log(e);
}