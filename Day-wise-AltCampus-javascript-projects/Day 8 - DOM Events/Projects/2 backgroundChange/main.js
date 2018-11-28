document.addEventListener('click', colorHandler);

var letters = "0123456789ABCDEF"; 

var elem = document.body.firstElementChild;

function colorHandler(e) {
  
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 15))];
  }

  e.target.style.backgroundColor = color;
  console.log(e);
}