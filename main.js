// XHR - XmlHttpRequest
let Places = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
  let domString = '';
  arrayToPrint.forEach((place) => {
    domString += '<div class="col-4 product">';
    domString +=   `<div class="card">`;
    domString +=   `  <div class="card-header">${cityName}</div>`;
    domString +=   `  <div class="card-header">${cityState}</div>`;
    domString +=   `  <img src=${place.imageUrl} class="card-img-top" alt="...">`;
    domString +=   `  <div class="card-body">`;
    domString += `        <ul class="list-group list-group-flush">`;
    domString += `          <li class="list-group-item">favorites</li>`;
    domString += `          <li class="list-group-item">${place.Restaurant}</li>`;
    domString += `          <li class="list-group-item">${place.bar}</li>`;
    domString += `          <li class="list-group-item">${place.Hotel}</li>`;
    domString += `        </ul>`;
    domString += `      </div>`;
    domString +=   `    <p class="TouristAttraction">${place.TouristAttraction}</p>`;
    domString +=   `  </div>`;
    domString +=   `</div>`;
    domString +=   `</div>`;
    domString += '</div>';

  })
  printToDom('place-container', domString);
};

function executeThisCodeAfterFileLoads(){
  const data = JSON.parse(this.responseText);
  places = data.place;
  domStringBuilder(data.places);
}

function executeThisCodeifXHRFails(){
  console.error('oh shit');
}

const getRidesData = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  myRequest.addEventListener('error', executeThisCodeifXHRFails);
  myRequest.open('GET', './db/places.json');
  myRequest.send();
};

const init = () => {
  getPlacesData ();
};

init();