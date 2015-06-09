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
});