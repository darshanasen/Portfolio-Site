(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
	$('h1').addClass('animated tada');
	$('.menuBG').on('click', function () {
		$(this).toggleClass('animate');
		$('.hamburger').toggleClass('animate');
		$('.nav').toggleClass('display');
	});
	$('.navLink').on('click', function () {
		$('.nav').toggleClass('display');
		$('.hamburger').toggleClass('animate');
	});
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1osR0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixlQUFqQjtBQUNBLEdBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVztBQUNuQyxJQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsSUFBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLFNBQTVCO0FBQ0EsSUFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixTQUF0QjtBQUNBLEVBSkQ7QUFLQSxHQUFFLFVBQUYsRUFBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVc7QUFDcEMsSUFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixTQUF0QjtBQUNBLElBQUUsWUFBRixFQUFnQixXQUFoQixDQUE0QixTQUE1QjtBQUNBLEVBSEQ7QUFJQSxDQVhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoKSB7XHJcblx0JCgnaDEnKS5hZGRDbGFzcygnYW5pbWF0ZWQgdGFkYScpO1xyXG5cdCQoJy5tZW51QkcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FuaW1hdGUnKVxyXG5cdFx0JCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdhbmltYXRlJylcclxuXHRcdCQoJy5uYXYnKS50b2dnbGVDbGFzcygnZGlzcGxheScpO1xyXG5cdH0pXHJcblx0JCgnLm5hdkxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5uYXYnKS50b2dnbGVDbGFzcygnZGlzcGxheScpO1xyXG5cdFx0JCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdhbmltYXRlJylcclxuXHR9KVxyXG59KSgpOyJdfQ==
