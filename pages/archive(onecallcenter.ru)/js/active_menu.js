$(document).ready(function() {
    var page = $('body').attr('data-page');
    $('footer .menu li a[href*="'+page+'"]').addClass('choosen-footer');
    $('header .menu.hike li a[href*="'+page+'"]').addClass('choosen-header');

});
