$(document).ready(function () {

//nav scroll
$('.nav-scroll button').click(function() {
	var str = $(this).val();
	$(window).scrollTo("."+str, 800);
});
//add and remove class for nav
$(window).scroll(function () {
	var height_1 = $('.header-out').height();
	var height_2 = $('.fast').height();
	var height_3 = $('.what-we-do').height();
	var height_4 = $('.about').height();
	var height_5 = $('.why-us').height();
	var height_6 = $('.reviews').height();
	var height_7 = $('.samples').height();
	if ($(this).scrollTop() < height_1) {
		$('.nav-scroll button').removeClass('active');
    $('.nav-scroll__1').addClass('active');        
  };
	if ($(this).scrollTop() >= height_1) {
    $('.nav-scroll button').removeClass('active');
    $('.nav-scroll__2').addClass('active');
  };
  if ($(this).scrollTop() >= height_1+height_2) {
    $('.nav-scroll button').removeClass('active');
    $('.nav-scroll__3').addClass('active');
  };
  if ($(this).scrollTop() >= height_1+height_2+height_3) {
    $('.nav-scroll button').removeClass('active');
    $('.nav-scroll__4').addClass('active');
  };
  if ($(this).scrollTop() >= height_1+height_2+height_3+height_4) {
    $('.nav-scroll button').removeClass('active');
    $('.nav-scroll__5').addClass('active');
  };
  if ($(this).scrollTop() >= height_1+height_2+height_3+height_4+height_5) {
    $('.nav-scroll button').removeClass('active');
    $('.nav-scroll__6').addClass('active');
  };
  if ($(this).scrollTop() >= height_1+height_2+height_3+height_4+height_5+height_6) {
    $('.nav-scroll button').removeClass('active');
    $('.nav-scroll__7').addClass('active');
  };
});
//nav-scroll on scroll
//var running = 1;
$('body').bind('mousewheel', function(event, delta) {  
	//if (running != 0) {
		//var running = 0;		
	  if (delta < 0) { 
	  	var btn_act1 = $('.nav-scroll button.active').parent().next().children('button').val();	
	  	$(window).scrollTo("."+btn_act1, 800, function() { 
	  		//var running = 1;        
			});
	  } 
	  else { 
	  	var btn_act2 = $('.nav-scroll button.active').parent().prev().children('button').val();	
			$(window).scrollTo("."+btn_act2, 800, function() { 
	  		//var running = 1;        
			});
	 // } 	  
  }
  //else {
  //	alert('fsd');
  //}
  return false; 
});

//hide all popups
$('.transparent').click(function() {
	$('.datepicker').fadeOut();
	$('.select ul').slideUp();
	$('.calendar, .select ul').removeClass('z-index');
	$(this).hide();
});

//instant-quote select
$('.select span').click(function() {
	$('.transparent').show();
	$(this).next().slideDown();	
	$(this).parent().addClass('active z-index');
});
$('.select li').click(function() {
	sel_val = $(this).text();
	$(this).parent().prev().html(sel_val+'<i></i>');
	$(this).parent().slideUp();
	$(this).parent().parent().removeClass('active z-index').addClass('selected');
	$('.transparent').hide();
});

//pay selects
$('.pay__select span').click(function() {
	$('.pay__select ul').slideUp();
	$(this).next().slideDown();
});
$('.pay__select li').click(function() {	
	pay_val = $(this).text();
	$(this).parent().prev().html(pay_val+"<i></i>");
	$(this).parent().slideUp();
});

//datepicker
if ($('.datepicker').length>0) {
	$('.datepicker').datepicker({
		onSelect: function(date) { 
			$('.calendar__date').html(date+'<i></i>');
			$('.calendar').addClass('selected');
			$('.datepicker').fadeOut();
			$('.transparent').hide();
			$('.calendar').removeClass('z-index');
		}
	});
	$('.calendar__date').click(function() {
		$('.transparent').show();
		$('.datepicker').fadeIn();
		$('.calendar').addClass('z-index');
	});
};

});





function mouseWheel(element, callback, context) {
//Mouse wheel event handler
var wheelHandler = function (event) {
	var delta = 0;
	event = event || window.event;
	if (event.wheelDelta) { //IE
		delta = event.wheelDelta/120;
	} else if (event.detail) { //firefox
		delta = -event.detail/3;
	}
	
	if (event.preventDefault) {
		event.preventDefault();
	}
	event.returnValue = false;
	if (delta) {
		callback.call(context || this, event, delta); //callback function
	}
}

if (element.addEventListener) { //For firefox
	element.addEventListener('DOMMouseScroll', wheelHandler, false); //Mouse wheel initialization
} else if (element.attachEvent) { //For IE
	element.attachEvent('onmousewheel',wheelHandler); //Mouse wheel initialization
}
return wheelHandler;
}
function removeMouseWheel(element, eventHandler) {
if (element.removeEventListener) {
	element.removeEventListener('DOMMouseScroll',eventHandler,false);
} else if (element.detachEvent) {
	element.detachEvent('onmousewheel',eventHandler);
}
}
/*Example usage - First make a callback function...*/
//Within the body element, create a HTML div with id="test" and try the following:
function display(event, delta) {
alert(delta);
}