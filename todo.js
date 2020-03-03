const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//array가 생성되도록
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //filter mean = forEach에서 Fn을 실행하는 것 같이
  //각각의 item과 같이 실행
  const cleanToDos = toDos.filter(function(toDo) {
    //li.id가 string이여서 number로 변경이 필요
    //parseInt = string을 number로 change
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

//localstorage save
//JSON.stringify is all javascript ohject change to string
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//todo 생성 내용
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; //li에도 id부여
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId; //li에 id 추가
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  //push를 써서 array안에 elment 하나를 넣어줌
  //toDos array안에 toDoObj를 넣음
  saveToDos();
  //push 밑에 작성, input이 들어온게 없으니
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  //toDos를 가져오고 가져온 것을 javascript object로 변환
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    //forEach = array에 담겨있는 것들을 각각에 한번씩 함수 실행
    parsedToDos.forEach(function(toDo) {
      //각각에 대해서 paintToDo실행
      paintToDo(toDo.text);
    });
  }
}
//초기화, todo를 생성
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
