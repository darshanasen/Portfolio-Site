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

	const jobs = new Array('Midnight Snacker', 'Bonafide Hustler', 'Jumanji Enthusiast', 'Pun-Hit Wonder', 'Cookie Maker', 'Pinball Wizard');

	var i = 0;
	setInterval(function() {
		$('.alternateJob').empty().append(jobs[i]);
		if(i < jobs.length - 1) {
			i++;
		} else {
			i = 0;
		}
	}, 2000);

})();