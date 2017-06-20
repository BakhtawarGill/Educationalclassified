$.fn.is_on_screen = function() {
        var win = $(window);
        var viewport = {
                top: win.scrollTop(),
                left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
if ($('#hipa').length > 0) { // if target element exists in DOM
        if ($('#hipa').is_on_screen()) { // if target element is visible on screen after DOM loaded
                $('#typo').addClass("typo-hipa "); // log info //to be change
        } else {
                $('#typo').removeClass("typo-hipa "); // log info //to be change
        }
}
$(window).scroll(function() { // bind window scroll event
        if ($('#hipa').length > 0) { // if target element exists in DOM
                if ($('#hipa').is_on_screen()) { // if target element is visible on screen after DOM loaded
                        $('#typo').addClass("typo-hipa "); // log info //to be change
                } else {
                        $('#typo').removeClass("typo-hipa "); // log info //to be change
                }
        }
});
if ($('#below-feature').length > 0) { // if target element exists in DOM
        if ($('#below-feature').is_on_screen()) { // if target element is visible on screen after DOM loaded
                $('#feature-animation1').addClass("service-animation "); // log info //to be change
        } else {
                $('#feature-animation1').removeClass("service-animation "); // log info //to be change
        }
}
$(window).scroll(function() { // bind window scroll event
        if ($('#below-feature').length > 0) { // if target element exists in DOM
                if ($('#below-feature').is_on_screen()) { // if target element is visible on screen after DOM loaded
                        $('#feature-animation1').addClass("feature-animation1 "); // log info //to be change
                } else {
                        $('#feature-animation1').removeClass("feature-animation1 "); // log info //to be change
                }
        }
});

if ($('#carousel-banner').length > 0) { // if target element exists in DOM
        if ($('#carousel-banner').is_on_screen()) { // if target element is visible on screen after DOM loaded
                $('.header-info').fadeIn('slow'); // log info //to be change
        } else {
                $('.header-info').fadeOut('slow'); // log info //to be change
        }
}


$(window).scroll(function() { // bind window scroll event
        if ($('#carousel-banner').length > 0) { // if target element exists in DOM
                if ($('#carousel-banner').is_on_screen()) { // if target element is visible on screen after DOM loaded
                        $('.header-info').fadeIn('slow'); // log info //to be change
                } else {
                        $('.header-info').fadeOut('slow'); // log info //to be change
                }
        }
});

if ($('#service').length > 0) { // if target element exists in DOM
        if ($('#service').is_on_screen()) { // if target element is visible on screen after DOM loaded
                        $('.slide-left').addClass("in-view"); // log info //to be change
                } else {
                        $('.slide-left').removeClass("in-view"); // log info //to be change
                }
}


$(window).scroll(function() { // bind window scroll event
    if ($('#service').length > 0) { // if target element exists in DOM
        if ($('#service').is_on_screen()) { // if target element is visible on screen after DOM loaded
                        $('.slide-left').addClass("in-view"); // log info //to be change
                } else {
                        $('.slide-left').removeClass("in-view"); // log info //to be change
                }
	}
});







$(document).ready(function() {
        $(".click-btn").click(function() {
                console.log('clicked');
                $('body').animate({
                        scrollTop: 0
                }, 200);
                $(".highlight-text").on("click", function() {
                        debugger;
                        $(".aliens-loader").fadeOut("slow");
                });
        });
        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        sync1.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                navigation: true,
                pagination: false,
                afterAction: syncPosition,
                responsiveRefreshRate: 200,
        });
        $('.one').click(function() {
            
                console.log('move')
                        // With optional speed parameter
                        // Parameters has to be in square bracket '[]'
                sync1.trigger('owl.goTo', 0)
        });
        $('.two').click(function() {
                console.log('move')
                // With optional speed parameter
                // Parameters has to be in square bracket '[]'
                debugger;
                debugger;
                sync1.trigger('owl.goTo', 1)
                
        });
        $('.three').click(function() {
                
                console.log('move')
                        // With optional speed parameter
                        // Parameters has to be in square bracket '[]'
                sync1.trigger('owl.goTo', 2)
        });
        $('.four').click(function() {
                
                console.log('move')
                        // With optional speed parameter
                        // Parameters has to be in square bracket '[]'
                sync1.trigger('owl.goTo', 3)
        });
        $('.five').click(function() {
               ;
                console.log('move')
                        // With optional speed parameter
                        // Parameters has to be in square bracket '[]'
                sync1.trigger('owl.goTo', 4)
        });
        $('.six').click(function() {
                
                console.log('move')
                        // With optional speed parameter
                        // Parameters has to be in square bracket '[]'
                sync1.trigger('owl.goTo', 5)
        });
        $('.seven').click(function() {
               
                console.log('move')
                        // With optional speed parameter
                        // Parameters has to be in square bracket '[]'
                sync1.trigger('owl.goTo', 6)
        });
        sync2.owlCarousel({
                items: 15,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [979, 10],
                itemsTablet: [768, 8],
                itemsMobile: [479, 4],
                pagination: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                        el.find(".owl-item").eq(0).addClass("junaid");
                }
        });

        function syncPosition(el) {
                var current = this.currentItem;
                $("#sync2").find(".owl-item").removeClass("junaid").eq(current).addClass("junaid")
                if ($("#sync2").data("owlCarousel") !== undefined) {
                        center(current)
                }
        }
        $("#sync2").on("click", ".owl-item", function(e) {
                e.preventDefault();
                var number = $(this).data("owlItem");
                sync1.trigger("owl.goTo", number);
        });

        function center(number) {
                var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                var num = number;
                var found = false;
                for (var i in sync2visible) {
                        if (num === sync2visible[i]) {
                                var found = true;
                        }
                }
                if (found === false) {
                        if (num > sync2visible[sync2visible.length - 1]) {
                                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                        } else {
                                if (num - 1 === -1) {
                                        num = 0;
                                }
                                sync2.trigger("owl.goTo", num);
                        }
                } else if (num === sync2visible[sync2visible.length - 1]) {
                        sync2.trigger("owl.goTo", sync2visible[1])
                } else if (num === sync2visible[0]) {
                        sync2.trigger("owl.goTo", num - 1)
                }
        }
        //Sort random function
        function random(owlSelector) {
                owlSelector.children().sort(function() {
                        return Math.round(Math.random()) - 1;
                }).each(function() {
                        $(this).appendTo(owlSelector);
                });
        }
        $("#owl-demo, #owl-demo1").owlCarousel({
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left icon-white'></i>", "<i class='fa fa-chevron-right icon-white'></i>"],
                beforeInit: function(elem) {
                        //Parameter elem pointing to $("#owl-demo")
                        random(elem);
                }
        });
        $(window).load(function() {
                // Animate loader off screen
                $(".aliens-loader").fadeOut("slow");
				$('body').animate({scrollTop:0}, 1000);
				
				
        });
		
		
		 
            $('.totop').hide();
            $(window).scroll(function(){
            
            if ($(this).scrollTop() > 0) {
            $('.totop').fadeIn();
            } else {
            $('.totop').fadeOut();
            }
            
            });
            
            $( ".totop" ).click(function() {
             console.log('clicked');
             
             $('body').animate({scrollTop:0}, 1000);
             
			});
		
		
		


$('#myModal').on('show.bs.modal', function(e) {
        console.log('here');
        $("body").addClass('scroll-none');
		$(".aliens-loader").show();
	    $(".aliens-loader").hide(2000);
});
$('#myModal').on('hidden.bs.modal', function(e) {
        console.log('remove');
        $("body").removeClass('scroll-none');
        $(".aliens-loader").show();
        $(".aliens-loader").hide(2000);
});




 $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 1100);
			jQuery(function(){
				jQuery('.auto_click').click();
			});
            return false;
          }
        }
      });
	  
});