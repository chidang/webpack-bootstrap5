import '../scss/core.scss';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import 'imports-loader?imports[]=default|jquery!jquery-mousewheel'
import 'imports-loader?imports[]=default|jquery!malihu-custom-scrollbar-plugin'
import { Tooltip, Toast, Popover } from 'bootstrap';

$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('.btn-toggle-navigation-menu').on('click', function () {
    // open or close navbar
    $('#sidebar').toggleClass('active');
  });

});