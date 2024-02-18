

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageAddress1 = "../Dicee Challenge - Starting Files/images/dice" + randomNumber1 + ".png";

document.querySelector('.img1').setAttribute("src",imageAddress1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageAddress2 = "../Dicee Challenge - Starting Files/images/dice" + randomNumber2 + ".png";

document.querySelector('.img2').setAttribute("src",imageAddress2);


if(imageAddress1 > imageAddress2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";

} else if (imageAddress2 > imageAddress1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";

}else {
    document.querySelector("h1").innerHTML = "Draw";

} 