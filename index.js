'use strict';
var leapYear = require('leap-year');

module.exports = function (year) {
	year = year || new Date();

	if (year instanceof Date) {
		year = year.getFullYear();
	}
	
	return year - (year % 4);
};
