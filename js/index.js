$(document).ready(function() {
	
	$('#more-btn').click(function() {
		
		$moreBtn = $(this);
		
		$('#about-more').slideToggle();
		
		
		var txt = $moreBtn.text() == 'More' ? 'Less ^' : 'More';
		
		$moreBtn.text(txt);			
		
		
	});	
	
	$('nav li a').click(function(evt) {
       
       evt.preventDefault(); 		
	 	
		var elem =  $(this).attr('href');	
        
        animTo(elem);	   
     	
	});	
	
	$('#to-top').click(function(evt) {	
		
		var elem = $('body');	
		
		animTo(elem);	

	});
	
	$('#top-bar').click(function() {	
		
		$(this).parent().fadeOut();	
		$('#fade').fadeOut();	
	   $('body').removeClass('noScroll');	
	
	});	
	
	
	$('.project').click(function() {
		$lightBox = $('#light');	
		$lightBox.fadeIn();
		$('#fade').fadeIn();		
        $('body').addClass('noScroll');	
        
        //$lightBox.find('#content').html($(this).attr("id"));
  		var str = "<p style='width:630px; height:100px; background: red'></p> <h1>The SUN</h1>";         
        
		$lightBox.find('#content').html(str);        
        	
	});
	
    var animTo = function(elem) {
          		
		$('html, body').animate({
        	scrollTop: $(elem).offset().top
     	}, 500);	    	
    } 	
	
});

