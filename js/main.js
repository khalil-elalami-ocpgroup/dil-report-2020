

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	 

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					 
					 
					.triggerHandler('--init');

				 

			});

	 


		 

})(jQuery);