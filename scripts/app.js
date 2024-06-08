; (function ($) {
	var app = $.sammy(function () {
		this.get('/', function () {
			$('#content').load('home.html');
		});
		this.get('#/about', function () {
			$('#content').load('about.html');
		});
		this.get('#/articles', function () {
			$('#content').load('articles.html');
		});
		this.get('#/finances', function () {
			$('#content').load('finances.html');
		});
		this.get('#/faqs', function () {
			$('#content').load('faqs.html');
		});
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

