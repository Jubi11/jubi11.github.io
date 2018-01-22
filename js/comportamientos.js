


$(document).ready(
	function()
	{
			$(document).ready(function(){
	          $('.nav-link').on('click', function(e){
	            e.preventDefault();
	            var hash = this.hash;
	            $('html, body').animate({
	              scrollTop:$(hash).offset().top
	            }, 1000, function(){
	              window.location.hash = hash
	            })
	          })
	        })

		if ($(document).scrollTop() > 440) {
		    //$('nav').addClass('fixed-top');
		    $('header').addClass('sm-header');
		    $('#navbar-menu').addClass('navbar-scroll');
		    $('#navbar-menu.navbar.navbar-inverse.bg-inverse').addClass('bg-color-scroll');
		  } else {
		    //$('nav').removeClass('fixed-top');
		    $('header').removeClass('sm-header');
		    $('#navbar-menu').removeClass('navbar-scroll');
		    $('#navbar-menu.navbar.navbar-inverse.bg-inverse').removeClass('bg-color-scroll');
		  }

		  $('.navbar-nav>li>a').on('click', function(){
			    $('.navbar-collapse').collapse('hide');
		   });

		  $(document).on('click',function(){
			$('.collapse').collapse('hide');
		   })

		$(window).scroll(function() {
		  if ($(document).scrollTop() > 440) {
		    //$('nav').addClass('fixed-top');
		    $('header').addClass('sm-header');
		    $('#navbar-menu').addClass('navbar-scroll');
		    $('#navbar-menu.navbar.navbar-inverse.bg-inverse').addClass('bg-color-scroll');
		  } else {
		    //$('nav').removeClass('fixed-top');
		    $('header').removeClass('sm-header');
		    $('#navbar-menu').removeClass('navbar-scroll');
		    $('#navbar-menu.navbar.navbar-inverse.bg-inverse').removeClass('bg-color-scroll');
		  }
		});


	});

