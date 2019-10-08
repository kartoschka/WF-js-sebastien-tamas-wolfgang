inputString = document.querySelector("#text");
inputNumber = document.querySelector("#number");
button = document.querySelector("button");

function strngCutter(string, number) {
    chars = string.length - number;
    console.log(string.substring(0, chars));
}

button.addEventListener("click", function(){
    strngCutter(inputString.value, inputNumber.value)
    })