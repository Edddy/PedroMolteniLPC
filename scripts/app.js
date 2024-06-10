; (function ($) {
	var app = $.sammy(function () {
		with (this) {
			use(Sammy.GoogleAnalytics);

			get('/', function () {
				$('#content').load('home.html');
			});
			get('#/about', function () {
				$('#content').load('about.html');
			});
			get('#/articles', function () {
				$('#content').load('articles.html');
			});
			get('#/finances', function () {
				$('#content').load('finances.html');
			});
			get('#/faqs', function () {
				$('#content').load('faqs.html');
			});
		}
	});

	$(function () {
		app.run();

		$(window).on('resize', function () {
			if ($('#btnmenu').is(":visible")) {
				$('#mobilemenu').hide();
			}
		});
		if ($('#btnmenu').is(":visible")) {
			$('#mobilemenu').hide();
		}
	});

})(jQuery);

