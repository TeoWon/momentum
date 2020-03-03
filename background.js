const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber) {
  const image = new Image();
  // Math.random에서 0을 줄 수도 있어서 +1
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("backgroundImage");
  //image가 첫 순서
  body.prepend(image);
}

function genRandom() {
  // floor가 소수점 자리는 무시해서 표현
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
