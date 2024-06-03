var x= Math.floor(Math.random()*6)+1;
if(x===1){
    document.querySelector(".left").setAttribute("src","./images/dice1.png");
}
else if(x===2){
    document.querySelector(".left").setAttribute("src","./images/dice2.png");
}
else if(x===3){
    document.querySelector(".left").setAttribute("src","./images/dice3.png");
}
else if(x===4){
    document.querySelector(".left").setAttribute("src","./images/dice4.png");
}
else if(x===5){
    document.querySelector(".left").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".left").setAttribute("src","./images/dice6.png");
}
var y=Math.floor(Math.random()*6)+1;
if(y===1){
    document.querySelector(".right").setAttribute("src","./images/dice1.png");
}
else if(y===2){
    document.querySelector(".right").setAttribute("src","./images/dice2.png");
}
else if(y===3){
    document.querySelector(".right").setAttribute("src","./images/dice3.png");
}
else if(y===4){
    document.querySelector(".right").setAttribute("src","./images/dice4.png");
}
else if(y===5){
    document.querySelector(".right").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".right").setAttribute("src","./images/dice6.png");
}
if(x>y){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (y>x){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if(y===x){
    document.querySelector("h1").innerHTML = "Draw!" ;
}
