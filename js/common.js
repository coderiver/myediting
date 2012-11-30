$(document).ready(function () {

//nav scroll
jQuery('.nav-scroll button').click(function() {
	str = jQuery(this).val();
	jQuery.scrollTo("#"+str, 500);
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


});