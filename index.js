
(function () {
'use strict';

const  searchURL = 'https://en.wikipedia.org/w/api.php';


function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayResults(responseJson) {
  
    console.log(responseJson);
    console.log(typeof(responseJson));
  const myResult = responseJson.query.pages;
  const pages = Object.entries(myResult);
    console.log(pages);
    console.log(pages[0][1].extract);
  // if there are previous results, remove them
  $('#results-list-I').empty();
  //display the results section  
  $('#results-I').removeClass('hidden');

    $('#results-list-I').append(
      `<li>
      <p>${pages[0][1].extract}</p>
      </li>`);
};

function getWikiInfo(searchTerm) {
    
  const params = {
    action: 'query',
    format: 'json',
    origin: '*',
    prop: 'extracts',
    exintro: '', 
    explaintext: '',
    redirects: 1, 
    titles: searchTerm

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
      $('#js-error-message-I').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('#js-form-I').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term-I').val();
    getWikiInfo(searchTerm);
  });
}

function displayNow() {
  $('#bInfo').click(function() {
      event.preventDefault();
      $('.info').removeClass('displayLater-I');  
     
      watchForm();
  });
}

$(displayNow);
})();
