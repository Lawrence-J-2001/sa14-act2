const box = document.getElementById('box');
const animateButton = document.getElementById('control-button');
let isMoving = false;

animateButton.addEventListener('click', () => {
  if (!isMoving) {
    box.style.transform = 'translate(-50%, -50%) translateX(200px)';
    isMoving = true;
  } else {
    box.style.transform = 'translate(-50%, -50%)';
    isMoving = false;
  }
});