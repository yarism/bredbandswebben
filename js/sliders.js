$(document).ready(function(){
	/* The code here is executed on page load */
	
	/* Converting the slide handles to draggables, constrained by their parent slider divs: */
	
	$('.slider-handle').draggable({
		containment:'parent',
		axis:'x',
		drag:function(e,ui){
			/* The drag function is called on every drag movement, no matter how minute */	
			if(!this.par)
			{
				/* Initializing the variables only on the first drag move for performance */
				this.par = $(this).parent();
				this.parHeight = this.par.width();
				this.width = $(this).width();
				this.color = $.trim(this.par.attr('class').replace('colorful-slider',''));
			}
			var ratio = 1-(ui.position.left+this.width)/this.parHeight;
			resizeBar(this.color,ratio);
			checkBar(ratio);
		}
	});
});

function resizeBar(color,ratio)
{
	$('.cu-mid','.cuboid.'+color).width(200*ratio)
}

function checkBar(ratio) {
	console.log(ratio);
	if (ratio < 0.3) {
		$("li.fastestFilterSelected").show();
		$("li.slowerFilterSelected").hide();
		$("#result").text("8 erbjudanden");
		$("#fastestFilter").html('<input type="checkbox" checked="checked" /><b>100/100</b> (8)');
		$("#slowerFilter").html('<input type="checkbox" />10/10 (2)');
		$("#showSelectedSpeed").html('100 mbit/s');
	}
	else {
		$("li.fastestFilterSelected").hide();
		$("li.slowerFilterSelected").show();
		$("#result").text("2 erbjudanden");
		$("#fastestFilter").html('<input type="checkbox" />100/100 (8)');
		$("#slowerFilter").html('<input type="checkbox" checked="checked" /><b>10/10</b> (2)');
		$("#showSelectedSpeed").html('10 mbit/s');
	}
}