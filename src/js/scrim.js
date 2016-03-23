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
})
