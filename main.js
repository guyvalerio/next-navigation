'use strict';

require('o-hoverable');
var Expander = require('o-expander');
var isOutside = require('./src/client/js/is-outside');

function $(selector) {
	return Array.prototype.slice.call(document.querySelectorAll(selector));
}

module.exports = {

	init: function () {
		// convert top level links to button
		$('.js-sub-nav-toggle').forEach(function (toggleEl) {
			var innerHTML = toggleEl.innerHTML;
			var classes = toggleEl.className;
			var dataTrackable = toggleEl.getAttribute('data-trackable');
			toggleEl.outerHTML = '<button class="' + classes + '" data-trackable="' + dataTrackable +'">' + innerHTML + '</button>';
		});
		var nav = document.querySelector('.js-global-nav');
		var currentSubNav;
		// create expanders
		var expanders = Expander.init(nav, {
			toggleState: 'aria',
		});

		nav.addEventListener('oExpander.expand', function (ev) {
			currentSubNav = ev.target;
		});
		document.addEventListener('click', function (ev) {
			if (currentSubNav && isOutside(ev.target, currentSubNav)) {
				// close the currently open sub nav
				expanders.some(function (expander) {
					if (expander.el === currentSubNav) {
						expander.collapse();
						currentSubNav = null;
						return true;
					}
					return false;
				});
			}
		}, true);
	}

};
