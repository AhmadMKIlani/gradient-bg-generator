let css = document.querySelector("h3");
let firstColor =document.querySelector(".first-color");
let secondColor =document.querySelector(".second-color"); 
let body = document.getElementById("grad");

 function color(){
     body.style.background="linear-gradient(to right," 
     + firstColor.value 
     + "," 
     + secondColor.value 
     + ")";
     css.textContent = body.style.background ;
}

secondColor.addEventListener("input", color);
firstColor.addEventListener("input", color);

