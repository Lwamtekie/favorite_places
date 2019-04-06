let place= [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

// const domStringBuilder = (arrayToPrint) => {
//   let domString = '';
//   arrayToPrint.forEach((place) => {
//     domString += `<h3>${place.name}</h3>`;
//   })
//   printToDom('place-container', domString);
// };

 
 const placeBuilder = (arrayToPrint) => {
    let domString = '';
 
    arrayToPrint.forEach((p) => {  
 
        domString += `<div class="place">`;
        domString += `<div class="name"><h4>${p.id}</h4></div>`;
        domString += `<img src=${p.imageUrl}>`;
        domString += `<h4>${p.favoriteRestaurant}</h4>`;
        domString += `<h4>${p.Bar}</h4>`;
        domString +=` <h4>${p.hotel}</h4>`;
        domString += `<h4>${p.TouristAttraction}</h4>`;
        domString += `</div>`;
 
 
    })
 
 
    printToDom('place-container', domString);
 };
 
function executeThisCodeAfterFileLoads(){
  const data = JSON.parse(this.responseText);
  place= data.Places;
  placeBuilder (place);
  
};

function executeThisCodeifXHRFails(){
  console.error('oh shit');
}

const getPlacesData = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  myRequest.addEventListener('error', executeThisCodeifXHRFails);
  myRequest.open('GET', './db/favorite_places.json');
  myRequest.send();
  console.log(myRequest);
};

const init = () => {
  getPlacesData();
  
};

init();
