$(document).ready(function () {
	$('.owl-carousel').owlCarousel({

		dots: false,
		responsiveClass: true,
		URLhashListener: true,
		onResize: openItem,
		responsive: {
			0: {
				items: 1,
				smartSpeed: 1000,
				loop: true,
				slideTransition: 3000,
				center: false,
				margin: 10

			},
			768: {
				items: 3,
				loop: true,
				dots: true,

				smartSpeed: 1000,
				center: true

			},
			1201: {
				items: 3,
				nav: true,

				smartSpeed: 1000,
				margin: 25,
				loop: true,
				center: true
			}
		}
	})



	var owl = $('.owl-carousel');
	owl.owlCarousel();

	// owl.on('')


	$('.new-owl-control__btn.next').click(function () {
		owl.trigger('next.owl.carousel');
		changeSliderItmes()
	})
	$('.new-owl-control__btn.prev').click(function () {
		owl.trigger('prev.owl.carousel');
		changeSliderItmes()
	})

	function changeSliderItmes() {
		$('.reviews-item .reviews-text').removeClass('open');
		$(".reviews-inner").removeClass("more");
		$(".plus").removeClass("rotate")
	}

	changeSliderItmes()

	function openItem() {
		setTimeout(function () {
			var owl = $('.owl-carousel');
			var collection = $(".reviews-text");
			var wrap = $(".reviews-inner");
			$('.plus').unbind('click');
			$('.plus').click(function () {

				owl.trigger('.plus');
				if ($(this).parent().children('.reviews-text').hasClass('open')) {
					$(this).parent().children('.reviews-text').toggleClass("open");
					$(this).toggleClass("rotate");
					$(".reviews-inner").removeClass("more")
					return;
				}
				collection.removeClass("open");
				wrap.removeClass("more");
				$(".plus").removeClass("rotate");
				$(this).parent().children('.reviews-text').toggleClass("open");
				$(this).toggleClass("rotate");
				$(".reviews-inner").toggleClass("more")
			});


		}, 1);
	}

	openItem();

	$(".plus1").click(function () {
		$('.doc-text').toggleClass("full");
	});
	$(".header-items").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);

	});

	new WOW().init();

});
var sun1 = $(".item-img1 .sun");
var sun2 = $(".item-img2 .sun");
var sun3 = $(".item-img3 .moon");
var moon = $(".mun");


var $olo = $('.olo');

var desktop = 768,
	delay = $(window).width() < 768 ? 0 : 1500;
$(window).scroll(function () {
	$olo.each(function (index) {
		var $this = $(this),
			$closest = $this.closest('.method-item');
		if (isScreen($this)) {
			switch (index) {
				case 0:
					setTimeout(function () {
						$closest.find('.loop').each(loop);
						$this.find('.tuchka').addClass("anim-tuchka");
						$this.find('.lol').addClass("visible");
						sun1.addClass("sunup");
						$this.closest('.method-item').find('.loop').each(loop);
						$(".method-item1").addClass("visible")
					}, index * delay);

					break;
				case 1:
					setTimeout(function () {
						$closest.find('.loop').each(loop);
						$this.find('.tuchka').addClass("anim-tuchka");
						$this.find('.lol').addClass("visible");
						sun2.addClass("sundown");
						$this.closest('.method-item').find('.loop').each(loop);
						$(".method-item2").addClass("visible")
					}, index * delay);

					break;
				case 2:
					setTimeout(function () {
						$closest.find('.loop').each(loop);
						$this.find('.tuchka').addClass("anim-tuchka");
						$this.find('.lol').addClass("visible");
						sun3.addClass("sunscale");
						moon.addClass("mun-anim");
						$this.closest('.method-item').find('.loop').each(loop);
						$(".method-item3").addClass("visible")
					}, index * delay);
					break;
			}
		}

		function loop() {
			var $this = $(this),
				start = +$this.text();
			if ($closest.find('.tuchka').hasClass('anim-tuchka')) {
				return;
			}
			console.log($this);

			console.log(typeof start + ', ' + start);

			$this.animate({
				count: $this.data("name")
			}, {
				duration: 1750, //час анімації
				easing: 'swing',
				step: function (now) {
					var time = start + Math.ceil(now);
					$this.text(time < 10 ? '0' + time : time);
				}
			});
		}
	});


	function isScreen(element) {
		var win = $(window),
			winHeight = win.height(),
			winTop = win.scrollTop(),
			stickyTop = element[0].getBoundingClientRect().top + pageYOffset,
			stickyBox = 183 + stickyTop;


		return (winTop + winHeight >= stickyBox);
	}

});