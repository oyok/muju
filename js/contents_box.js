$(document).ready(function(){
	var $notice_contents=$(".contents_box_inner1");
	var $recruit_contents=$(".contents_box_inner2");
	var $notice_a=$(".notice");
	var $recruit_a=$(".recruit");
	
	$notice_a.bind("click",showNotice);
	$recruit_a.bind("click",showRecruit);
	
	function showNotice(){
		$notice_a.css({"border-bottom":"2px solid #004c80"});
		$notice_a.css({"color":"#004c80"});
		$recruit_a.css({"border-bottom":"2px solid #898989"});
		$recruit_a.css({"color":"#898989"});
		$notice_contents.show();
		$recruit_contents.hide();
	}
	function showRecruit(){
		$recruit_a.css({"border-bottom":"2px solid #004c80"});
		$recruit_a.css({"color":"#004c80"});
		$notice_a.css({"border-bottom":"2px solid #898989"});
		$notice_a.css({"color":"#898989"});
		$recruit_contents.show();
		$notice_contents.hide();
	}
});
