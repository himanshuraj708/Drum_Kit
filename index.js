var numofDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numofDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerHtml = this.innerHTML;
    makesound(buttoninnerHtml);
    buttonAnimation(buttoninnerHtml);

  });
}

for (var i = 0; i < numofDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("keydown", function (event) {
      var buttoninnerHtml = event.key;
      makesound(buttoninnerHtml);
      buttonAnimation(buttoninnerHtml);
    });
}

//both are same upper and this
/*
document.addEventListener("keydown", function (event) {
  makesound(event.key);
});
*/

function makesound(key) {
  switch (key) {
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(button);
      break;
  }
}


function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },100)

}
/* var audio = new Audio("sounds/tom-1.mp3");
        audio.play();*/
