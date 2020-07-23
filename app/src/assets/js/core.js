import '../scss/core.scss';
import 'imports-loader?imports[]=default|jquery!jquery-mousewheel'
import 'imports-loader?imports[]=default|jquery!malihu-custom-scrollbar-plugin'

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});