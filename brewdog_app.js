var getBeerDataFromBrewdog = function() {
  var url = 'https://api.punkapi.com/v2/beers';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", mapBeerNames)
  request.send();
}


var mapBeerNames = function() {
  var apiResult = this;
  var beers = JSON.parse(apiResult.responseText);
  var beerNames = beers.map(function(beer){
    return beer.name
  })
  debugger
  return beerNames;
}

getBeerDataFromBrewdog();
