const COORDS = "coords";

function saveCorrds(coordsObj) {
  //저장값은 string
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//current my position 위도,경도 읽기
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCorrds(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

//current my position message
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
  }
}

function init() {
  loadCoords();
}

init();
