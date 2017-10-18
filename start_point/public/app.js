var init = function() {
  var url = 'https://api.punkapi.com/v2/beers'

  var makeRequest = function(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function() {
      var beers = JSON.parse(this.responseText);
      render(beers);
    });
    request.send();
  }

  var addBeersToList = function(beers) {
    var dropdown = document.querySelector('#select');
    beers.forEach(function(beer, index) {
      var option = document.createElement("option");
      option.innerText = beer.name;
      option.value = index;
      select.appendChild(option);
    })
  }

  var render = function(beers) {
    addBeersToList(beers);
    var beerDropDown = document.querySelector('#select');

    var handleBeerSelect = function() {
      var selectedBeer = beers[this.value];
      populate(selectedBeer);
    }
    beerDropDown.addEventListener('change', handleBeerSelect);
  }

  var populate = function(beer) {
    var name = document.querySelector('#name');
    var selectedBeerName = beer.name;
    name.innerText = selectedBeerName;

    var tagline = document.querySelector('#tagline');
    var selectedBeerTagline = beer.tagline;
    tagline.innerText = selectedBeerTagline;

    var abv = document.querySelector('#abv');
    var selectedBeerAbv = beer.abv;
    abv.innerText = selectedBeerAbv + "% ABV";

    var image = document.querySelector('#beer-pic');
    image.src = beer.image_url;
  }

  makeRequest(url);
}

window.addEventListener('load', init)
