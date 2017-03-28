(function () {
	$('h1').addClass('animated tada');
	$('.menuBG').on('click', function() {
		$(this).toggleClass('animate')
		$('.hamburger').toggleClass('animate')
		$('.nav').toggleClass('display');
	})
	$('.navLink').on('click', function() {
		$('.nav').toggleClass('display');
		$('.hamburger').toggleClass('animate')
	})
})();