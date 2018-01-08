var eye_l;
var eye_r;

/*Gamepad setting*/
var gamepads = {};
window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);

function gamepadHandler(event, connecting) {
  var gamepad = event.gamepad;
  if (connecting) {
    gamepads[gamepad.index] = gamepad;
    console.log(gamepad.index + ' connected');
  } else {
    delete gamepads[gamepad.index];
    console.log(gamepad.index + ' disconnected');
  }
}

/*Gamepad Threshold*/
var correctSensitivity = function(number, threshold){
  percentage = (Math.abs(number) - threshold) / (1 - threshold);
  if(percentage < 0)
     percentage = 0;
  return percentage * (number > 0 ? 1 : -1);
}

/*start*/
document.addEventListener('DOMContentLoaded', function() {
  init(); 
});

/*SVG subsections*/
function init(){
    eye_l = document.getElementById("eye_L");
    eye_r = document.getElementById("eye_R");
    
    gameloop();
}

function gameloop(){
  gamepad = navigator.getGamepads()[0];
  if(gamepad){
    ax0 = correctSensitivity(gamepad);
    ax1 = correctSensitivity();
    ax2 = correctSensitivity();
    ax3 = correctSensitivity();
  

    if(gamepad.[0].pressed){
      console.log('A');
    }
  }
  window.requestAnimationFrame(gameloop)
}
