$(document).on('ready', function(){
	AOS.init({
		offset: 20,
		duration: 600,
		delay: 400,
		easing: 'ease-in-sine',
	});

	$(window).on('load', function () {
	    AOS.refresh();
	});

	$('.tabs ul li').on('click', function(){
		var this_id = $(this).attr('data-id');
		var this_img = $(this).attr('data-img');
		$('.tabs ul li').removeClass('active');
		$(this).addClass('active');
		$('.competence').css({'background-image':'url('+ this_img +')'});
		$('.tab_container').removeClass('active');
		$('.tab_container[data-attr="'+ this_id +'"]').addClass('active');
		$('.comp_slider').slick('resize');
		$('.bridges_slider').slick('resize');
		$('.slider_br_nav').slick('resize');
		$('.slider_nav').slick('resize');
	});

	$('.obj_slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
	    slidesToScroll: 1,
	    initialSlide: 2,
	});

	$('.to_top button').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
	    return false;
	});

	$('.geog_slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 4000,
	    pauseOnHover: false,
	    pauseOnFocus: false,
	});

	$('.bridges_slider').slick({
		centerMode: true,
		draggable: true,
		focusOnSelect: true,
		variableWidth: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    asNavFor: '.slider_br_nav',
	    arrows: true,
	    initialSlide: 1,
	});

	$('.slider_br_nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.bridges_slider',
	  arrows: false,
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  initialSlide: 1,
	});

	$('.comp_slider').slick({
		centerMode: true,
		draggable: true,
		focusOnSelect: true,
	    slidesToShow: 3,
	    asNavFor: '.slider_nav',
	    arrows: true,
	    initialSlide: 1,
	});

	$('.slider_nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.comp_slider',
	  arrows: false,
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  initialSlide: 1,
	});

	$('.main_bg_slider').slick({
		arrows: true,
		dots: false,
		autoplay: true,
		pauseOnHover: false,
	    autoplaySpeed: 5000,
	    speed: 1800,
	    fade: true,
	});

	$('.moon-play3').on('click', function(){
		$(this).toggleClass('mt-pause');
	});

	$(".modern-ticker").modernTicker({
		effect: "scroll",
		scrollType: "continuous",
		scrollStart: "inside",
		scrollInterval: 20,
		transitionTime: 500,
		linksEnabled: true,
		pauseOnHover: true,
		autoplay: true
	});

	$('.comp_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.comp_text .slide').removeClass('active');
		$('.comp_text .slide[data-id=' + nextSlide +']').addClass('active');
	});

	$('.bridges_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.bridges_text .slide').removeClass('active');
		$('.bridges_text .slide[data-id=' + nextSlide +']').addClass('active');
		console.log(nextSlide);
	});

	$(window).on('scroll', function(){
		var st = $(this).scrollTop();
		if(st > 1){
			$("header").addClass('animated');
		} else{
			$("header").removeClass('animated');
		}
		if(st > 354){
			$("header").addClass('opacity');
		} else{
			$("header").removeClass('opacity');
		}
	});

	var st = $(this).scrollTop();
	if(st > 1){
		$("header").addClass('animated');
	} else{
		$("header").removeClass('animated');
	}

	
});