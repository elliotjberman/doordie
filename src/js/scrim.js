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

		}, 600, 'swing', function() {

			window.location.hash = target;

		});
	});
}

var linkAnimation = function(){
  var aChildren = $(".nav").children().children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

      var hashCheck = function(){
        var windowPos = Math.round($(window).scrollTop()); // get the offset of the window from the top of page
        var windowHeight = Math.round($(window).height()); // get the height of the window
        var docHeight = Math.round($(document).height());

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = Math.round($(theID).offset().top); // get the offset of the div from the top of page
            var divHeight = Math.round($(theID).height()); // get the height of the div in question
            if (windowPos >= (divPos - 50) && windowPos < ((divPos + divHeight - 50))) {
							console.log("divpos : " + divPos)
							console.log("windowpos : " + windowPos)
							console.log("divHeight : " + divHeight)
                $("a[href='" + theID + "']").parent().addClass("active", 1000);
            } else {
                $("a[href='" + theID + "']").parent().removeClass("active", 1000);
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav:last-child a").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active", 1000);
                $("nav:last-child a").addClass("active", 1000);
            }
        }
      }

      $(window).scroll(function(){
        hashCheck()
      });
      $(window).load(hashCheck());

}

$(document).ready(function(){
  smoothScroll();
	navBarControl();
 	linkAnimation();
})
