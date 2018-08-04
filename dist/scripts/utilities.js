$(function(){
	// fav toggle actions
    $(".toggle-action").on("click", function(){
        $(this).toggleClass("is-active");
    });

    // responsive menu actions
    var menuFlag = false;
    function openMenu(){
    	$(".u-lightbox").addClass("is-visible");
    	$(".l-sidenav").addClass("is-open");
    	$("body").addClass("u-overflow-hidden");
    };
    function closeMenu(){
    	$(".u-lightbox").removeClass("is-visible");
    	$(".l-sidenav").removeClass("is-open");
    	$("body").removeClass("u-overflow-hidden");
    };

    function menuAction(){
    	if (menuFlag === false){
    		menuFlag = true;
    		openMenu();    	
    	} else {
    		menuFlag = false;
    		closeMenu(); 
    	}
    };
    // responsive menu event listeners
    $(".burgermenu").on("click", menuAction);
    $(".u-lightbox").on("click", menuAction);
    $(".sidenav-link").on("click", function(){
    	menuFlag = false;
		closeMenu(); 
    });
});