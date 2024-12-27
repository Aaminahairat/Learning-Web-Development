var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    newSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  console.log(buttonColours.indexOf(userChosenColour));
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkCorrect(userClickedPattern.length - 1);
});

function checkCorrect(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        newSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");
    playSound("wrong");
    animateBody();
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    $(document).keypress(function () {
      if (!started) {
        $("#level-title").text("Level " + level);
        newSequence();
        started = true;
      }
    });
  }
}

function newSequence() {
  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  console.log(randomNumber);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  $("h1").text("Level " + level);
}

function playSound(name) {
  var audio = new Audio((src = "sounds/" + name + ".mp3 "));
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function animateBody() {
  $("body").addClass("game-over");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
