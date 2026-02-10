let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
   
    let newline = document.createElement("li");
    
   
    newline.innerText = inp.value;
    
    
    ul.appendChild(newline);
    
    
    inp.value = "";
});