(function () {
	$('h1').addClass('animated tada');
	$('.menuBG').on('click', function() {
		$(this).toggleClass('animate')
		$('.hamburger').toggleClass('animate')
		$('.nav').fadeToggle('400');
	});
	$('.navLink').on('click', function() {
		$('.nav').fadeToggle('400')
		$('.hamburger').toggleClass('animate')
	})

})();