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
			get('#/resources', function () {
				$('#content').load('resources.html');
			});
			get('#/faqs', function () {
				$('#content').load('faqs.html');
			});
			get('#/videos', function () {
				$('#content').load('videos.html');
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

