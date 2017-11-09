import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function() {
  var url = window.location;

  $('ul.menu a[href="' + url + '"]').parent().addClass('active');

  $('ul.menu a').filter(function() {
    return this.href == url;
  }).addClass('active');

});

$('.selectable').click(function(){
  $(this).toggleClass('selected');
});
