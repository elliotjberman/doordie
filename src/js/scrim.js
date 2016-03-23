var navBarControl = function(){
	// hide .navbar first
	$(".navbar").hide();
	// fade in .navbar
	$(window).scroll(function () {
		 // set distance user needs to scroll before we start fadeIn
			if ($(this).scrollTop() > $("#about").offset().top-51) {
					$('.navbar').fadeIn(300);
			} else {
					$('.navbar').fadeOut(300);
			}
	});
}
var smoothScroll = function()
{
		$('a[href^="#"]').on('click', function(e){

		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({

			'scrollTop': $target.offset().top-50

		}, 1000, 'swing', function() {

			window.location.hash = target;

		});
	});
}
$(document).ready(function(){
  smoothScroll();
	navBarControl();
	$('body').scrollspy({ target: '.navbar' })
})
