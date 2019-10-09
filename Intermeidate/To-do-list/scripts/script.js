let button = document.querySelector("#add");
let input = document.querySelector("#in");
let output = document.querySelector("#output");
let click; 

tasks = [];


button.addEventListener("click", function(){

    document.getElementById("output").innerHTML ="";
    
    let myObj = {
        name : input.value,
        isDone : false
    }

    tasks.push(myObj)
    let i = 1
    for (let task of tasks){
        if (task.isDone == true) {
            output.innerHTML += `<li id ="${i}"><strike>${task.name}</strike> <span>X</span></li>`  
        }
        else {output.innerHTML += `<li id ="${i}">${task.name} <span id="D${i}">X</span></li>`
        }
        i += 1;  
    }
})

output.addEventListener("click", function(e) {
  let click = e.target.parentNode.textContent.split(" ")[0]
  console.log(click)
})





