(function () {
	$('.menuBG').on('click', function() {
		$(this).toggleClass('animate')
		$('.hamburger').toggleClass('animate')
		// $('.menuBG').toggleClass('animate');
		$('.nav').toggleClass('display');
	})
})();