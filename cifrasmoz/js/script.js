var $c = jQuery.noConflict();

$c(document).ready(function() {
	
	// owl carousel
	setOwlCarousel();

	// set footer-triangle
	setSetFootTriangle();

	// hover
	setLinkDarkHoverColor();

	// fwindows resize
	$c(window).resize(function (){
		setSetFootTriangle();
	});

});

// owl carousel
function setOwlCarousel() {

	var owl = $c('.owl-carousel');

	// load .owl-carousel
	$c('.owl-carousel').owlCarousel({
		// animateIn: 'fade',
		// animateOut: 'fade',
		stopOnHover: true,
		items: 1,
		loop:  true,
	    autoplay: true,
		pagination: false
	});

	owl.owlCarousel();
	// Go to the next item
	$c('.slide-next').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$c('.slide-prev').click(function() {
	    // With optional speed parameter
	    owl.trigger('prev.owl.carousel');
	})
}


function setSetFootTriangle(){
	$c(".footer-triangle").css({
	"border-top": getFooterHeight() + "px solid #f7941e",
	"border-right": (getWindowsWidth() * 0.18) + "px solid transparent",
	"width": "0",
	"height": "0",
	"left": "0"
	});
}

function getFooterHeight() {
	return $c("#footer").height();
}

function getWindowsWidth () {
	return $c(window).width();
}


function setLinkDarkHoverColor() {


	$c(".link-dark").hover(
	function () {
		$c(this).find(".title").css({
			color: "#f7941e"
		});
	},

	function () {
		$c(this).find(".title").css({
			color: "#1f1f1f"
		});
	}
	);
}

