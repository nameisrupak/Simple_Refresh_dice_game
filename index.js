
let x=Math.floor(Math.random()*6)+1;
let img=document.querySelector(".img1");
img.setAttribute("src", "./images/dice" + x + ".png");

let y=Math.floor(Math.random()*6)+1;
let imgg=document.querySelector(".img2");
imgg.setAttribute("src", "./images/dice" + y + ".png");

if(x>y){
    document.querySelector(".heading").innerHTML="Player 1 wins";
}
else{
    document.querySelector(".heading").innerHTML="Player 2 wins";
}

