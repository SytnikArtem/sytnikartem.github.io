$(document).ready(function() {
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
    }
  );
  wow.init();
  $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
    responsiveWidth: 1201,
		scrollHorizontally: true,
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

                        if ( slideIndex != 0 ) {
                            wow = new WOW(
                                {
                                    animateClass: 'animated',
                                    live: true
                                }
                            );
                            wow.init();
                        }
                    },
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
