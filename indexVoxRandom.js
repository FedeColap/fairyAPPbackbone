(function () {

  'use strict';
  const STORE = [
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_01_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_02_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_03_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_04_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_05_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_06_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_07_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_08_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_09_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_10_grimm.mp3"
    },
    {
        web: "https://ia600606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_11_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_12_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_13_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_14_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_15_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_16_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_17_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_18_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_19_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_20_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_21_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_22_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_23_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_24_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_25_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_26_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_27_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_28_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_29_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_30_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_31_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_32_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_33_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_34_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_35_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_36_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_37_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_38_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_39_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_40_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_41_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_42_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_43_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_44_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_45_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_46_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_47_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_48_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_49_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_50_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_51_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_52_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_53_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_54_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_55_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_56_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_57_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_58_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_59_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_60_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_61_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_62_grimm.mp3"
    },
    {
        web: "https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_63_grimm.mp3"
    }
  
  ]
  
  const searchURL = 'https://cors-anywhere.herokuapp.com/https://librivox.org/api/feed/audiotracks';
  
  
  function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }
  
  function displayResults(responseJson) {
        console.log(responseJson);
        console.log(typeof(responseJson));
    
    let randNum = function getRandomInt() {
      return Math.floor(Math.random() * Math.floor(63));
    }(); 
        console.log(randNum);
        console.log(responseJson.sections[randNum]);
        console.log($('#results-list-H'));
    // if there are previous results, remove them
    $('#results-list-H').empty();
    //call the function to match the audio with the title
    listenAudio(responseJson, STORE);
    //match the single item
    let i = randNum;
    //display the results section  
    $('#results-H').removeClass('hidden');
    $('#results-list-H').append(
        `<li class="listResult">
        <a href="${responseJson.sections[i].web}" target="_blank" class="randomLink"> <h3>${responseJson.sections[i].title}</h3></a>
        </li>`
    );
    
  };

  //match the audio from STORE to the array from the Browser
  function listenAudio(responseJson, STORE) {
        console.log('ready to match ' + typeof(responseJson.sections));
    for(let i = 0; i < responseJson.sections.length; i++) {
      responseJson.sections[i] = Object.assign(responseJson.sections[i], STORE[i]);
    }
    return responseJson.sections;
  }
  
  function getVoxLibriRandom() {  
    const params = {
      project_id: 6103,
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
        $('#js-error-message-H').text(`Something went wrong: ${err.message}`);
      });
  }
  
  function watchForm() {
    $('#js-form-H').submit(event => {  
      event.preventDefault();
      getVoxLibriRandom();
    });
  }
  
  function displayNow() {
    
    $('#bHear').click(function() {
        $('.opening').addClass('hidden');
        event.preventDefault();
        $('.displayLater-H').css("display", "block");  

        (function clearOthers () {
            if ($('.displayLater-R').css("display", "block")) {
              $('.displayLater-R').css("display", "none");
            } if ($('.displayLater-I').css("display", "block")) {
              $('.displayLater-I').css("display", "none");
            } if ($('.displayLater-L').css("display", "block")) {
              $('.displayLater-L').css("display", "none");
            }
        })();     
          
        watchForm();
    });
  }
  
  $(displayNow);
})();