(function($) {


	$.fn.panel = function(userConfig) {

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).panel(userConfig);

				return $this;
			}

}(jQuery);