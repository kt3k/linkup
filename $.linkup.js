// $.linkup.js (https://github.com/uki213/linkup)
/*global jQuery */
(function ($) {
	'use strict';
	$.extend({
		linkup: function (obj) {
			$(document).ready(function () {
				var i;
				for (i = 0; i < obj.task.length; i = i + 1) {
					if (typeof obj.task[i].handler === 'function') {
						$(obj.el).on(obj.task[i].event, obj.task[i].selector, $.proxy(obj.task[i].handler, $(obj.el)));
						$(obj.task[i].selector).trigger('ready');
					}
				}
			});
		}
	});
}(jQuery));
