$(function(){

/* Accordion */
			$(".b-accordion__item-name").on("click", function(){
			

				var $this = $(this),
				$band =$this.parents(".b-accordion__item"),
				$frames = $(".b-accordion__item")
				$target = $this.parent().next(".b-accordion__quest-list");

				if ($band.hasClass("active")) {
					$target.slideUp();
					$band.removeClass("active");


				}else{
					$frames.children(".b-accordion__quest-list").slideUp();
					$frames.removeClass("active");
					$target.slideDown();
					$band.addClass("active");

				}
	});
			
/* Color change hover */	
	$('.b-accordion__item-band').hover(function(){
		$(this).stop().animate({backgroundColor:"#269ce0"}, 600);
		}, function(){$(this).stop().animate({backgroundColor:"#AAA9A9"}, 600); });

		
});