(function () {

'use strict';

const searchURL = 'https://en.wikipedia.org/w/api.php';


function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayResults(responseJson) {
    console.log(responseJson);
    console.log(typeof(responseJson));
  // console.log(responseJson.parse.externallinks);
  
  let randNum = function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(503));
  }(); 
    console.log(randNum);
    console.log(responseJson.parse.externallinks[randNum]);

  // if there are previous results, remove them
  $('#results-list-R').empty();
  //display the results section  
  $('#results-R').removeClass('hidden');

  $('#results-list-R').append(
    `<li class="listResult">
    <a href="${responseJson.parse.externallinks[randNum]}" target="_blank" class="randomLink"> <h3>The story we have selected is the n. ${randNum}</h3></a>
    </li>`
  );

};

function getWikiLinks() {  
  const params = {
    action: 'parse',
    origin: '*',
    pageid: '8915322',
    prop: 'externallinks',
    format: 'json'
  };
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

    console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message-R').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('#js-form-R').submit(event => {
    event.preventDefault();
    getWikiLinks();
  });
}

function displayNow() {
  
  $('#bRead').click(function() {
    $('.opening').addClass('hidden');
    event.preventDefault();
    $('.displayLater-R').css("display", "block");  

    (function clearOthers () {
        if ($('.displayLater-I').css("display", "block")) {
          $('.displayLater-I').css("display", "none");
        } if ($('.displayLater-H').css("display", "block")) {
          $('.displayLater-H').css("display", "none");
        } if ($('.displayLater-L').css("display", "block")) {
          $('.displayLater-L').css("display", "none");
        }
    })();  
     
    watchForm();
  });
}

$(displayNow);
})();