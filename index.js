'use strict';

module.exports = function (year) {
	year = year || new Date();

	if (year instanceof Date) {
		year = year.getFullYear();
	}
	
	return Math.floor(year / 400) * 400;
};
