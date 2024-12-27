var fdie = document.querySelector(".img1");
var sdie = document.querySelector(".img2");


function throwDice(die) {
    var score = Math.floor(Math.random()*6)+1    
    for (var comp = 1; comp < 7; comp++){
        if (score === comp) {
            die.src= "./images/dice"+score+".png";
        }
    }
    return score
}

function refreshPage() {
    var title = document.querySelector(".container h1")
    var fdiescore = throwDice(fdie);
    var sdiescore = throwDice(sdie);
    
    if (fdiescore > sdiescore){
        title.innerHTML = "Player1 wins!"
    }else if (fdiescore < sdiescore){
        title.innerHTML = "Player2 wins!"
    }else{
        title.innerHTML = "Its a tie!"
    }

}

refreshPage();
    
