  $(document).ready(function(){
		var $mainmenu_list=$(".mainmenu_list");
		var $submenu=$(".submenu_list");
			
	    $mainmenu_list.bind("mouseenter",onMenuEnter);
	    $mainmenu_list.bind("mouseleave",onMenuLeave);
		
		function onMenuEnter(){
			$submenu.stop().slideDown();
		}
		function onMenuLeave(){
	       $submenu.stop().slideUp();
		}
  });
 
