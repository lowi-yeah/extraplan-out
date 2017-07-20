// JS Goes here - ES6 supported

import jQuery from 'jquery'
global.jQuery = jQuery

function _adjustTypeformSize() {
  let w = $(window).height(),
      m = $('.masthead').height(),
      iframe = $('.typeform-widget').css('height', `${w-m}px`)

  console.log('_adjustTypeformSize', w, m)

}

$(document)
  .ready(function () { 
    console.log('hallo')
    _adjustTypeformSize()
    $(window).on('resize', _adjustTypeformSize)})
