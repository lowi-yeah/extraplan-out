// JS Goes here - ES6 supported

import jQuery   from 'jquery'
import Dropbox  from 'dropbox'

global.jQuery = jQuery


function _connectToDropbox() {
  let reader = new FileReader()
  // If we use onloadend, we need to check the readyState.
  reader.onloadend = function(evt) {
     
    let s = evt.target.result.replace(/\s+/g, ' ')
    s = s.slice(0, - 1)
    s = '['+ s + ']'

    let json = JSON.parse(s),
        pretty = JSON.stringify(json, null, 2)

    $('#results').html(pretty)
   
  };


  let dbx = new Dropbox({ accessToken: '3sv-MOehT4gAAAAAAAABKWYP0YDSpJ0-xVXlRhSHctcGPaMcbz_6kTu3ttQgHmx9' })
  dbx.filesDownload({path: '/extraplan/typeform.txt'})
    .then(function(response) {
      reader.readAsBinaryString(response.fileBlob);
    })
    .catch(function(error) {
      console.log(error)
    })

}

$(document)
  .ready(function () { 
    console.log('hallo')
    _connectToDropbox()})

