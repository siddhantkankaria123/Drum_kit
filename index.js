var number_of_drum_button = document.querySelectorAll(".drum").length;
var key;
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < number_of_drum_button; i++) {
  buttons[i].addEventListener("click", function () {
    key = this.innerHTML;
    animation(key);
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    }
  });
}
document.addEventListener("keypress", function (event) {
  var keyboard_button = event.key;
  animation(keyboard_button);
  switch (keyboard_button) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
  }
});

function animation(current_key) {
  var active_button = document.querySelector("." + current_key);
  active_button.classList.add("pressed");
  setTimeout(function () {
    active_button.classList.remove("pressed");
  }, 100);
}
