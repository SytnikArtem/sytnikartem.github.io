$(document).ready(function(){

	$("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
        return false;
    });
	$('.block2 .item').click(function(){
		/*$(this).toggleClass("open_block");*/
		$('.block2 .item').not(this).removeClass("full_height");
		$('.block2 .item').not(this).children(".open_info" ).removeClass("open_block");
		$(this).toggleClass("full_height");
		$(this).children(".open_info" ).toggleClass("open_block");
	});
	buttons3('.prise_toggle');
	buttons3('.efc_toggle');
	buttons3('.time_toggle');
	buttons3('.health_toggle');
});

function buttons3(element){
	$(element).click(function(){
		var mir;
		var inject;
		var blef;
		var other;
		if (element=='.prise_toggle') {
			mir=6;
	 		inject=9;
	 		blef=10;
	 		other=6;
		}
		if (element=='.efc_toggle') {
			mir=9;
	 		inject=6;
	 		blef=9;
	 		other=3;
		}
		if (element=='.time_toggle') {
			mir=10;
	 		inject=3;
	 		blef=8;
	 		other=3;
		}
		if (element=='.health_toggle') {
			mir=1;
	 		inject=10;
	 		blef=10;
	 		other=7;
		}
		buttons2(this,mir,inject,blef,other);
	})	
}


function buttons2(selector1,mir,inject,blef,other){
	buttonsactive(selector1);
	buttons('.mir',mir);
	buttons('.inject',inject);
	buttons('.blef',blef);
	buttons('.other',other);
}


function buttons(selector1,selector2){
		$(selector1).css('height',selector2+'0%').find('.current_val').text(selector2);
}

function buttonsactive(selector1){
	$(selector1).parents('.controls').children('li').removeClass('active');
	$(selector1).parent('li').addClass('active');
}

