$(document).ready(function() {
	
	$(".table_wrap").mouseenter(function() {
		$(".table_wrap").show();

	}).mouseleave(function() {
		$(".table_wrap").hide();

	});
	$(".room_wrap").mouseenter(function() {
		$(".table_wrap").show();

	}).mouseleave(function() {
		$(".table_wrap").hide();

	});
	
	$(".icon5").mouseenter(function() {
		$(".gondora_border").show();
		$(".pre_reser_wrap").show();
		
	}).mouseleave(function() {
		$(".gondora_border").hide();
		$(".pre_reser_wrap").hide();
	});
	$(".pre_reser_wrap ").mouseenter(function(){
		$(".gondora_border").show();
		$(".pre_reser_wrap").show();
	}).mouseleave(function(){
		$(".gondora_border").hide();
		$(".pre_reser_wrap").hide();
	});

});