$(document).ready(function(){
	// modal on/of
	$(".open-modal").on("click", function(){
		$("#popup-button").fadeIn();
	});

	$("#clbh_phone_div").on("click", function(){
		$("#popup-bphone").fadeIn();
	});

	$(".close").on("click", function(){
		$("#popup-button, #popup-bphone, #popup-mouse").fadeOut();
	});

	// close on esc
	$(document).keyup(function(event){
		if(event.which=='27'){
			$("#popup-button, #popup-bphone, #popup-mouse").fadeOut();
		}
	});

	// close on bg
	$(".modal-wrap").on('click', function(event){
		if( $(event.target).is($(".modal-wrap")) || $(event.target).is('.close') ) {
			$("#popup-button, #popup-bphone, #popup-mouse").fadeOut();
		} 
	});

	// date
	var thisYear = new Date().getFullYear();

	$('.year').html(thisYear);

	/* owl */
	$('.table-mob').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items: 1,
		navText: []
	});

	$('.reviews-mobile').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		items: 1,
		navText: []
	});
	if(navigator.userAgent.indexOf('Mac') > 0) {


	$('body').addClass('mac-os');
	}
// console.log(navigator.userAgent.indexOf('Mac'));
if(window.navigator.platform == "MacIntel") {
	$('body').addClass('mac-os');
}


// window.navigator.platform:"MacIntel")
});




// $(document).ready(myfunction);
// $(window).on('resize',myfunction);

// function myfunction() {
//    if($(window).width() < 767) {
//     if ($('header + .start-block').length > 0){
//         	var b = $("header + .start-block").remove();
//         	$('body').after(b);
//        		// $("#content_right").detach();
//     }

// }
// else{
//     if ($('header + .start-block').length == 0) {
//        var c = $("body + .start-block").remove();
//        $('body header').after(c); 
//     }

// }
// }

	

