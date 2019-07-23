// Elementi
var $window = $(window);
var $header = $('header');

// Variabili
var yPosition = 0;
var windowHeight = $window.height();
var headerHeight = $header.height();

// Eventi
$window.on('scroll', function scrollHandler() {
	yPosition = $(this).scrollTop();
	var opacity = yPosition / (windowHeight - headerHeight) * 0.5;
	var maxOpacity = 0.25;
	if (opacity <= maxOpacity) {
		$header.css('background-color', `rgba(0, 0, 0, ${opacity})`);
	} else {
		$header.css('background-color', `rgba(0, 0, 0, ${maxOpacity}`);
	}
});