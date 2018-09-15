var $c = jQuery.noConflict();

// setYouTubeVideoSingleCifra();

$c(document).ready(function() {
	// YouTube

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
		animateIn: 'slideInRight',
		animateOut: 'slideOutLeft',
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

// function setYouTubeVideoSingleCifra () {
// 			// 2. This code loads the IFrame Player API code asynchronously.
// 			var tag = document.createElement('script');
//
// 			tag.src = "https://www.youtube.com/iframe_api";
// 			var firstScriptTag = document.getElementsByTagName('script')[0];
// 			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// 			// 3. This function creates an <iframe> (and YouTube player)
// 			//    after the API code downloads.
// 			var player;
// 			function onYouTubeIframeAPIReady() {
// 				player = new YT.Player('player', {
// 					height: '27%',
// 					width: '100%',
// 					videoId: 'qeO9HTUsj9A',
// 					events: {
// 						'onReady': onPlayerReady,
// 						'onStateChange': onPlayerStateChange
// 					}
// 				});
// 			}
//
// 			// 4. The API will call this function when the video player is ready.
// 			function onPlayerReady(event) {
// 				// event.target.playVideo();
// 			}
//
// 			// 5. The API calls this function when the player's state changes.
// 			//    The function indicates that when playing a video (state=1),
// 			//    the player should play for six seconds and then stop.
// 			var done = false;
// 			function onPlayerStateChange(event) {
// 				if (event.data == YT.PlayerState.PLAYING && !done) {
// 					// setTimeout(stopVideo, 6000);
// 					done = true;
// 				}
// 			}
//
// 			function stopVideo() {
// 				player.stopVideo();
// 			}
// }
