(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	$('h1').addClass('animated tada');
	$('.menuBG').on('click', function () {
		$(this).toggleClass('animate');
		$('.hamburger').toggleClass('animate');
		$('.nav').fadeToggle('400');
	});
	$('.navLink').on('click', function () {
		$('.nav').fadeToggle('400');
		$('.hamburger').toggleClass('animate');
	});

	var jobs = new Array('Midnight Snacker', 'Bonafide Hustler', 'Jumanji Enthusiast', 'Pun-Hit Wonder', 'Cookie Maker', 'Pinball Wizard');

	var i = 0;
	setInterval(function () {
		$('.alternateJob').empty().append(jobs[i]);
		if (i < jobs.length - 1) {
			i++;
		} else {
			i = 0;
		}
	}, 2000);
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1osR0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixlQUFqQjtBQUNBLEdBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVztBQUNuQyxJQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsSUFBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLFNBQTVCO0FBQ0EsSUFBRSxNQUFGLEVBQVUsVUFBVixDQUFxQixLQUFyQjtBQUNBLEVBSkQ7QUFLQSxHQUFFLFVBQUYsRUFBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVc7QUFDcEMsSUFBRSxNQUFGLEVBQVUsVUFBVixDQUFxQixLQUFyQjtBQUNBLElBQUUsWUFBRixFQUFnQixXQUFoQixDQUE0QixTQUE1QjtBQUNBLEVBSEQ7O0FBS0EsS0FBTSxPQUFPLElBQUksS0FBSixDQUFVLGtCQUFWLEVBQThCLGtCQUE5QixFQUFrRCxvQkFBbEQsRUFBd0UsZ0JBQXhFLEVBQTBGLGNBQTFGLEVBQTBHLGdCQUExRyxDQUFiOztBQUVBLEtBQUksSUFBSSxDQUFSO0FBQ0EsYUFBWSxZQUFXO0FBQ3RCLElBQUUsZUFBRixFQUFtQixLQUFuQixHQUEyQixNQUEzQixDQUFrQyxLQUFLLENBQUwsQ0FBbEM7QUFDQSxNQUFHLElBQUksS0FBSyxNQUFMLEdBQWMsQ0FBckIsRUFBd0I7QUFDdkI7QUFDQSxHQUZELE1BRU87QUFDTixPQUFJLENBQUo7QUFDQTtBQUNELEVBUEQsRUFPRyxJQVBIO0FBU0EsQ0F4QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuXHQkKCdoMScpLmFkZENsYXNzKCdhbmltYXRlZCB0YWRhJyk7XHJcblx0JCgnLm1lbnVCRycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYW5pbWF0ZScpXHJcblx0XHQkKCcuaGFtYnVyZ2VyJykudG9nZ2xlQ2xhc3MoJ2FuaW1hdGUnKVxyXG5cdFx0JCgnLm5hdicpLmZhZGVUb2dnbGUoJzQwMCcpO1xyXG5cdH0pO1xyXG5cdCQoJy5uYXZMaW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcubmF2JykuZmFkZVRvZ2dsZSgnNDAwJylcclxuXHRcdCQoJy5oYW1idXJnZXInKS50b2dnbGVDbGFzcygnYW5pbWF0ZScpXHJcblx0fSlcclxuXHJcblx0Y29uc3Qgam9icyA9IG5ldyBBcnJheSgnTWlkbmlnaHQgU25hY2tlcicsICdCb25hZmlkZSBIdXN0bGVyJywgJ0p1bWFuamkgRW50aHVzaWFzdCcsICdQdW4tSGl0IFdvbmRlcicsICdDb29raWUgTWFrZXInLCAnUGluYmFsbCBXaXphcmQnKTtcclxuXHJcblx0dmFyIGkgPSAwO1xyXG5cdHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmFsdGVybmF0ZUpvYicpLmVtcHR5KCkuYXBwZW5kKGpvYnNbaV0pO1xyXG5cdFx0aWYoaSA8IGpvYnMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRpKys7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpID0gMDtcclxuXHRcdH1cclxuXHR9LCAyMDAwKTtcclxuXHJcbn0pKCk7Il19
