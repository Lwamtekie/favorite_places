// XHR - XmlHttpRequest
let Places = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
  let domString = '';
  arrayToPrint.forEach((place) => {
    // 
    
   
    domString += '<div class="col-4 product">';
    domString +=   `<div class="card">`;
    domString +=   `  <div class="card-header">${place.cityName}</div>`;
    domString +=   `  <img src=${place.imageUrl} class="image" alt="...">`;
    domString +=   `  <div class="card-body">`;
    domString += `        <ul class="list-group list-group-flush">`;
    domString += `          <li class="list-group-item">favorites</li>`;
    domString += `          <li class="list-group-item">${place.Restaurant}</li>`;
    domString += `          <li class="list-group-item">${place.Bar}</li>`;
    domString += `          <li class="list-group-item">${place.Hotel}</li>`;
    domString += `          <li class="list-group-item">${place.TouristAttraction}</p>`;
    domString += `          </ul>`
    domString += `  </div>`;
    domString += `  </div>`;
    domString += `  </div>`;
    domString += `  </div>`;

    
  })
  printToDom('place-container', domString);
};

function executeThisCodeAfterFileLoads(){
  const data = JSON.parse(this.responseText);
  let places = data.Places;
  
  domStringBuilder(places);
}

function executeThisCodeifXHRFails(){
  console.error('oh shit');
}

const getRidesData = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  myRequest.addEventListener('error', executeThisCodeifXHRFails);
  myRequest.open('GET', './db/favorite_places.json');
  myRequest.send();
};



const init = () => {
  getRidesData()
 
 
};


init();
