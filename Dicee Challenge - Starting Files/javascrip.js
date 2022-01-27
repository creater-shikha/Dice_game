var num1=Math.floor(Math.random()*6 +1);
var num2=Math.floor(Math.random()*6 +1);
document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");
document.querySelector("h1").style.fontSize="5rem";
if(num1>num2){
    document.querySelector("h1").innerHTML="🚩Congratution  player 1 win";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="🚩Congratution  player 2 win";
}
else{
    document.querySelector("h1").innerHTML="Match Draw";
}
