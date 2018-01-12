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
    document.querySelector('#connTxt').innerText = gamepad.id + ' connected';
    document.querySelector('#gamepadStatusDiv').classList.add('gpconnected');
    document.querySelector('#gamepadStatusDiv').classList.remove('gpidle');
    document.querySelector('#gpsvg').classList.add('gpconnected');
    document.querySelector('#gpsvg').classList.remove('gpidle');
  } else {
    delete gamepads[gamepad.index];
    document.querySelector('#connTxt').innerText = 'Waiting for new Gamepad connection...';
    document.querySelector('#gamepadStatusDiv').classList.remove('gpconnected');
    document.querySelector('#gamepadStatusDiv').classList.add('gpidle');
    document.querySelector('#gpsvg').classList.remove('gpconnected');
    document.querySelector('#gpsvg').classList.add('gpidle');
  }
}

/*Gamepad Threshold*/
var correctSensitivity = function(number, threshold){
  percentage = (Math.abs(number) - threshold) / (1 - threshold);
  if(percentage < 0)
     percentage = 0;
  return (percentage * (number > 0 ? 1 : -1)).toFixed(2);
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
    ax0 = correctSensitivity(gamepad.axes[0], 0.25) * 3;
    ax1 = correctSensitivity(gamepad.axes[1], 0.25) * 2.5;
    ax2 = correctSensitivity(gamepad.axes[2], 0.25) * 3;
    ax3 = correctSensitivity(gamepad.axes[3], 0.25) * 2.5;


    eye_l.setAttribute('transform', 'translate('+ ax0 + ' ' + ax1 +')');
    eye_r.setAttribute('transform', 'translate('+ ax2 + ' ' + ax3 +')');
  

    if(gamepad.buttons[0].pressed){
      //open mouth
      console.log('A');
    }
  }
  window.requestAnimationFrame(gameloop)
}
