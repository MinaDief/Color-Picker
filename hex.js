const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.querySelector(".btn");
let randomColor=0;
btn.addEventListener("click", function(){
    const currentColor = getRandomColor();
    color.textContent=currentColor;
    color.style.color=currentColor;
    document.body.style.backgroundColor=currentColor;
});


function getRandomColor(){
    randomColor="#";
    for(i=0;i<6;i++)
    randomColor += hex[Math.floor(Math.random()*hex.length)];
    return randomColor ;
}