liter = document.querySelector("#liter");
km = document.querySelector("#km");
button = document.querySelector("button");

button.addEventListener("click", function(){
    document.querySelector("p").innerText = `Fuel cons.: ${liter.value/(km.value/100)}`
})