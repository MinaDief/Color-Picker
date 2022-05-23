const colors = ["red","white","#129f4a","grey","#0f9cda"];
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");
const body = document.querySelector(".main-container");

btn.addEventListener("click", function(){
    const currentColor = getRandomColor();
    color.textContent=colors[currentColor];
    body.style.backgroundColor=colors[currentColor];
});


function getRandomColor(){
    return Math.floor(Math.random()*colors.length);
}