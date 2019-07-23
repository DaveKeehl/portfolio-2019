var CustomPlugin = (function() {
	'use strict';

	// Functions
	function getNextConcert(selector) {
		var $elements = $(selector);

		if (!$elements) {
			return false;
		}

		var now = new Date();
		now.setMilliseconds(0);
		now.setSeconds(0);
		now.setMinutes(0);
		now.setHours(0);

		var nextDates = [];
		for (var i = 0; i < $elements.length; i++) {
			var $currentElement = $elements.eq(i);
			var datetime = $currentElement.find('time').attr('datetime');

			var dateArray = datetimeToArray(datetime);

			var d = new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5], 0);
			if (d >= now) {
				nextDates.push({
					date: d,
					element: $currentElement
				});
			}
		}

		return sortByKey(nextDates, 'date')[0].element;
	}

	function disablePastEvents(selector) {
		var $elements = $(selector);

		if (!$elements) {
			return false;
		}

		var now = new Date();
		now.setMilliseconds(0);
		now.setSeconds(0);
		now.setMinutes(0);
		now.setHours(0);

		for (var i = 0; i < $elements.length; i++) {
			var datetime = $elements.eq(i).find('time').attr('datetime');

			var dateArray = datetimeToArray(datetime);

			var d = new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5], 0);
			if (d < now) {
				$elements.eq(i).addClass('old-concert');
			}
		}
	}

	function datetimeToArray(dateString) {
		var splitted = dateString.split(' ');
		var date = splitted[0];
		var time = splitted[1];

		var ymd = date.split('-');
		var his = (time ? time.split(':') : [0, 0, 0]);

		return [ymd[0], ymd[1], ymd[2], his[0], his[1], his[2]];
	}

	function sortByKey(array, key, desc) {
		return array.sort(function(a, b) {
			var x = a[key];
			var y = b[key];
			return (desc ? 1 : -1) * ((x < y) ? 1 : ((x > y) ? -1 : 0));
		});
	}

	return {
		getNextConcert: getNextConcert,
		disablePastEvents: disablePastEvents
	};
}());