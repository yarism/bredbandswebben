$(document).ready(function() {
	$("#lightbox, #lightbox-panel").fadeIn(300);
	$("#choicesBubble").hide();
	$("#helpBubble").hide();
	$("#broadbandMenu").hide();
	$("#website").hide();
	$("div.selectOperator").hide();
	$("li.fastestFilterSelected").hide();
	$("#fastestFilter").click(function() { 
		$("li.fastestFilterSelected").slideToggle();
		$("#result").text("8 erbjudanden");
		$("#fastestFilter").html('<input type="checkbox" checked="checked" /><b>Stor - 100-1000 mbit/s</b>');
	});	
	/*$("#broadband").toggle(
                   function()
                   {
						$("#broadbandArrow").hide();

                   },
                   function()
                   {
						$("#broadbandArrow").show(300);
                   });*/
	$("#fastestFilter").toggle(
                   function()
                   {
                     	$("li.fastestFilterSelected").slide();
						$("#result").text("10 erbjudanden");
						$("#fastestFilter").html('<input type="checkbox" checked="checked" /><b>Stor - 100-1000 mbit/s</b>');
						$("div.selectOperator").show();
                   },
                   function()
                   {
                        $("li.fastestFilterSelected").hide();
						$("#result").text("2 erbjudanden");
						$("#fastestFilter").html('<input type="checkbox" />Stor - 100-1000 mbit/s');
                   });
	
	$("#speedFilter").click(function() {
		$("#speed").slideToggle();
	});	
	$("#websiteFilter").click(function() {
		$("#website").slideToggle();
	});	
	$("#broadband").click(function() {
		$("#broadbandMenu").slideToggle();
		$("#broadbandArrow").toggle(200);
		$("#firstMenuChoice").toggleClass("selected");
		$("div.selectOperator").show();
		$("#choicesBubble").fadeOut(300);
		$("#helpBubble").delay(5000).fadeIn(300);
	});	
	$("#choicesBubble").click(function() {
		$("#broadbandMenu").slideToggle();
		$("#broadbandArrow").toggle(200);
		$("#firstMenuChoice").toggleClass("selected");
		$("div.selectOperator").show();
		$("#choicesBubble").fadeOut(300);
	});	
	$("#IP-telefoni").click(function() {
		$("#secondMenuChoice").toggleClass("selected");
	});	
	$("#Digital-TV").click(function() {
		$("#thirdMenuChoice").toggleClass("selected");
	});	
 	$("a#close-panel").click(function(){
     	$("#lightbox, #lightbox-panel").fadeOut(300);
		$("#choicesBubble").delay(300).fadeIn(500);
 	})
	 $("a#close-panel-company").click(function(){
     	$("#lightbox, #lightbox-panel").fadeOut(300);
 	})
	 $("#helpBubble").click(function(){
		$("#helpBubble").remove();
     	$("#lightbox-help").fadeIn(300);
 	})
	$("a#close-help").click(function(){
     	$("#lightbox, #lightbox-help").fadeOut(300);
 	})
});