// const input = form.querySelector("input");
// input에 const를 해버리면 property를 제대로 읽어오지 못해 error발생

const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault();
  //기본 동작을 못하게 함
  //enter 시 input값이 사라지고 새로고침(기본동작)
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

//LS getItem
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    // not have user
  } else {
    paintGreeting(currentUser);
    //have user
  }
}

function init() {
  loadName();
}

init();
