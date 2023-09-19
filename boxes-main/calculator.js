let button = document.getElementsByTagName("button");
let result = document.getElementById("result");

for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    let input = this.innerText;
    updateDisplay(input);
  };
}
function updateDisplay(input) {
    
}
