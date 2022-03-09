var randomNum1 = Math.floor(Math.random()*6)+1;
var randomNum2 = Math.floor(Math.random()*6)+1;


// document.getElementsByClassName("img1")[0].src = `./images/dice${randomNum1}.png`;
var imageSource1 = "./images/dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imageSource1);


// document.getElementsByClassName("img2")[0].src = `./images/dice${randomNum2}.png`;
var imageSource2 = "./images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

            
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
             
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!.";
}
            
