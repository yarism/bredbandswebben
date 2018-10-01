$(document).scroll(function(e){

    // grab the scroll amount and the window height
    var scrollAmount = $(window).scrollTop();
	console.log(scrollAmount);

    if (scrollAmount > 430) {
        // run a function called doSomething
       doSomething();
    }
	else {
		$("div.menuLeft").css('margin-top', 0);
	}

    function doSomething() { 
        // do something when a user gets 50% of the way down my page
		$("div.menuLeft").css('margin-top', (scrollAmount-400));
    }

});