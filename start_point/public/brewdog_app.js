//
// var url = 'https://api.punkapi.com/v2/beers';
//
// var makeRequest = function(url) {
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.addEventListener("load", function(){
//     var beers = JSON.parse(this.responseText);
//     render(mapBeerNames(beers));
//   })
//   request.send();
// }
//
//
// var mapBeerNames = function(beers) {
//   var beerNames = beers.map(function(beer){
//     return beer.name
//   })
//   return beerNames;
// }
//
// getBeerDataFromBrewdog();
//
// var render = function(beers) {
//   var beerList = document.getElementById('beer-list')
// }
//
// // init on page load
// // get html and tie to JS
