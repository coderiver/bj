head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	
	//fixed header
	$(window).scroll(function() {
		header = $('.header').offset().top;
		scrollTop = $(window).scrollTop();
		if (scrollTop > header) {
			$('.js-fixed').addClass('is-active');
		}
		else {
			$('.js-fixed').removeClass('is-active');
		};
	});
	$(window).load(function() {
		header = $('.header').offset().top;
		scrollTop = $(window).scrollTop();
		if (scrollTop > header) {
			$('.js-fixed').addClass('is-active');
		}
		else {
			$('.js-fixed').removeClass('is-active');
		};
	});
	$(window).scroll(function() {
		header = $('.header').offset().top;
		scrollTop = $(window).scrollTop();
		if (scrollTop > header+$('.js-banner').height()/2) {
			$('.js-fixed').addClass('is-color');
		}
		else {
			$('.js-fixed').removeClass('is-color');
		};
	});
	$(window).load(function() {
		header = $('.header').offset().top;
		scrollTop = $(window).scrollTop();
		if (scrollTop > header+$('.js-banner').height()/2) {
			$('.js-fixed').addClass('is-color');
		}
		else {
			$('.js-fixed').removeClass('is-color');
		};
	});

	//nav
	$('.js-nav-btn').on('click', function() {
		$('.js-nav').toggleClass('is-active');
		return false;
	});
	$('.js-nav').each(function() {
		$('body').on('click', function() {
			$('.js-nav').removeClass('is-active');
		});
		$(this).on('click', function(event) {
			event.stopPropagation();
		});
		$('.js-nav a').on('click', function() {
			$('.js-nav').removeClass('is-active');
		});
	});

	//LONGREAD

	//slider
	var total = $('.l-slider__slide').length;

	$('.js-slick').slick({
		infinite: true,
		arrows: true,
		// fade: true,
		slidesToShow: 1
	 });
	$('.js-total').text(total);

	$('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.js-current').text($('.slick-active').index());
	});

	$('.js-slider-prev').on('click', function(){
		$('.slick-prev').trigger('click');
		return false;
	 });

	$('.js-slider-next').on('click', function(){
		$('.slick-next').trigger('click');
		return false;
	});
	$(window).load(function() {
		$('.slick-next').each(function() {
			$(this).css('top', $('.js-arr').outerHeight()/2); 
		});
		$('.slick-prev').each(function() {
			$(this).css('top', $('.js-arr').outerHeight()/2); 
		});
	});
	$(window).resize(function() {
		$('.slick-next').each(function() {
			$(this).css('top', $('.js-arr').outerHeight()/2); 
		});
		$('.slick-prev').each(function() {
			$(this).css('top', $('.js-arr').outerHeight()/2); 
		});
	});
	
});