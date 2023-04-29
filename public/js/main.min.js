(function() {
	'use strict';
	var screen = $(window).width();

	var screenXs = 480,
		screenSm = 768,
		screenMd = 992,
		screenLg = 1200;

	$(window).resize(function() {
		screen = $(window).width();
	});

	// ✂ ------------------------------ Cut of the production ------------------------------------------
	$('a[href="#"]').on('click', function() {
		event.preventDefault();
	});
	// ✂ -----------------------------------------------------------------------------------------------

	/* =============================================== */
	/* ================= Esc Key Down ================ */
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('#search:visible').fadeOut(400).removeClass('open').find('input').blur();
			$('.taskfull__comments-form form:visible').fadeOut(400).find('textarea').blur();
		}
	});
	/* =====================||:||===================== */
	/* =============================================== */

	/* ==================== Search =================== */
	$('.search a').on('click', function(){
		$('#search').fadeToggle(400).toggleClass('open').find('input').focus();
	});
	/* =============================================== */

	/* =================== Carousel ================== */
	$('.page-start__carousel').slick({
		slide: '.page-start__item',
		accessibility: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					adaptiveHeight: true
				}
			}
		]
	});
	/* =============================================== */

	/* =================== Burger  =================== */
	$('body').on('click', '.burger a', function() {
		$(this).parent('.burger').toggleClass('cross');
		$('.page-nav').toggleClass('open');
	});
	/* =============================================== */

	/* ================== Comments =================== */
	$('body').on('click', '.taskfull__comments-form', function() {
		$(this).find('form').fadeIn(200).find('textarea').focus();
		autoheight($('.taskfull__comments-form textarea'));
	});

	$('.taskfull__comments-form textarea').focusout(function() {
		$(this).parents('form').delay(200).fadeOut(400);
	});
	/* =============================================== */

	/* ============= Textarea autoresize ============= */
	$('.taskfull__comments-form textarea').keyup(function (e) {
		autoheight(this);
	});

	function autoheight(a) {
		if (!$(a).prop('scrollTop')) {
			do {
				var b = $(a).prop('scrollHeight');
				var h = $(a).height();
				$(a).height(h / 2);
			}
			while (b && (b != $(a).prop('scrollHeight')));
		};

		$(a).height($(a).prop('scrollHeight'));
	}

	autoheight($('.taskfull__comments-form textarea'));
	/* =============================================== */

	/* ================= Notice bell ================= */
	$('.header-icons .notice').on('click', 'a', function(event) {
		if(screen >= screenMd) {
			event.preventDefault();
		}
	});
	/* =============================================== */

	/* =============== Dashboard & Help ============== */
	$('body').on('click', '.dashboard-row, .help-row', function() {
		$(this)
			.toggleClass('active')
			.children('.dashboard-sub-row:last, .help-sub-row:last')
			.slideToggle(200)
			.parent('.dashboard-row, .help-row')
			.siblings('.active')
			.toggleClass('active')
			.children('.dashboard-sub-row:eq(1), .help-sub-row:eq(1)')
			.slideToggle(200);
	});

	$('body').on('click', '.dashboard-avatar, .dashboard-check', function(e) {
		e.stopPropagation();
		$(this).addClass('active').parents('.dashboard-row').delay(1000).fadeOut(200);
	});

	$('body').on('click', '.btn', function(e) {
		e.stopPropagation();
	});
	/* =============================================== */

	/* ================== Detect IE ================== */
	var detectIE = function() {
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			return true;
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			var rv = ua.indexOf('rv:');
			return true;
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
			return true;
		}

		return false;
	}

	if (detectIE() === true) {
		$('body').addClass('IE');
	}
	/* =============================================== */
})(jQuery);