'use strict';
var leapYear = require('leap-year');

module.exports = function (year) {
	year = year || new Date();

	if (year instanceof Date) {
		year = year.getFullYear();
	}

	do {
		if (leapYear(year)) {
			return year;
		}
	} while (year--)
};
