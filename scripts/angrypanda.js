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
    if(gamepads[0] != null){
       eye_l.setAttribute('transform', 'translate('+ gamepads[0].axes[0] *5 +', '+ gamepads[0].axes[1]*5 +')');
    }
    window.requestAnimationFrame(gameloop)
}
