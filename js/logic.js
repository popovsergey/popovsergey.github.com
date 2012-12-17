$(function(){

/* Accordion */
			$(".b-accordion__item-name").on("click", function(){

				var $this = $(this),
				$frames = $(".b-accordion__item"),
				$target = $this.next(".b-accordion__quest-list");

				if ($this.parent().hasClass("active")) {
					$target.slideUp();
					$this.parent().removeClass("active");

				}else{
					$frames.children(".b-accordion__quest-list").slideUp();
					$frames.removeClass("active");
					$target.slideDown();
					$this.parent().addClass("active");
				}
	});

});