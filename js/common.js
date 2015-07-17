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

	function getScrollTop(){
		if(typeof pageYOffset!= 'undefined'){
			return pageYOffset;
		}
		else{
			var b = document.body;
			var d = document.documentElement;
	    	d = (d.clientHeight)? d : b;
	    	return d.scrollTop;
		}
	};

	var scrollTop2 = 0;

	$(window).on('scroll', function() {

		var scrollNow = $(window).scrollTop();

		if (scrollNow > scrollTop2) {
			if(getScrollTop() > $('.top').outerHeight() + $('.header__black').outerHeight()) {
				$('.js-fixed').addClass('is-hidden');
			};
		}
		else {
			if (scrollTop2 - scrollNow > 0) {				
				if(getScrollTop() < 10) {
					$('.js-fixed').removeClass('is-hidden');
				}
				else {
					$('.js-fixed').removeClass('is-hidden');
				}
			};
		}
		scrollTop2 = scrollNow;
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
		fade: true,
		slidesToShow: 1
	 });
	$('.js-total').text(total);

	$('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.js-current').text($('.slick-active').index()+1);
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
	
	$(function(){ // document ready
	   if (!!$('.js-sticky').length) { // make sure ".js-sticky" element exists
	      var el = $('.js-sticky');
	      var stickyTop = $('.js-sticky').offset().top; // returns number
	      var footerTop = $('.js-sticky-end').offset().top; // returns number
	      var stickyHeight = $('.js-sticky').height();
	      var limit = footerTop - stickyHeight - 74;
	      $(window).scroll(function(){ // scroll event
	          var windowTop = $(window).scrollTop(); // returns number
	            
	          if (stickyTop-74 < windowTop){
	             el.css({ position: 'fixed', top: 0 });
	             el.addClass('is-active');
	          }
	          else {
	             el.css('position','static');
	             el.removeClass('is-active');
	          }
	            
	          if (limit < windowTop) {
	          var diff = limit - windowTop;
	          el.css({top: diff});
	          }     
	        });
	   }
	});

	//search
	$('.js-search-btn').on('click', function() {
		$(this).toggleClass('is-active');
		$('.js-search').slideToggle('fast');
		$('.header').toggleClass('is-search');
		return false;
	});
	//side-nav
	$('.js-sidenav-btn').on('click', function() {
		$('.js-sidenav').addClass('is-active');
		$('.overlay').addClass('is-active');
	});
	$('.overlay').on('click', function() {
		$('.js-sidenav').removeClass('is-active');
		$('.overlay').removeClass('is-active');
	});
	$('.js-sidenav a').on('click', function() {
		$('.js-sidenav').removeClass('is-active');
		$('.overlay').removeClass('is-active');
	});

	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true
	});
});