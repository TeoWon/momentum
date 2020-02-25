const clockContainer = document.querySelector(".js-clock");
const clcockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clcockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds
    // 10s 보다 작으면 s 앞에 문자열 0이 같이 나오게
  }`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
