(function () {
	$('.menu').on('click', function() {
		$(this).toggleClass('animate')
		$('.hamburger').toggleClass('animate')
		$('.menuBG').toggleClass('animate');
		$('.nav').toggleClass('animate');
	})
})();