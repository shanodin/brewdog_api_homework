var getDataFromBrewdog = function() {
  var url = 'https://api.punkapi.com/v2/beers';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", function() {
    var brewdogData = JSON.parse(this.responseText);
    console.log(brewdogData);
  })
  request.send();
}

getDataFromBrewdog();
