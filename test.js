'use strict';
var test = require('ava');
var lastLeapYear = require('./');

test('should return the last leap year', function (t) {
	t.is(lastLeapYear(new Date(-61206064203841)), 28);
	t.is(lastLeapYear(new Date('January 10, 2008')), 2008);

	t.end();
});

test('should handle passing a year', function (t) {
	t.is(lastLeapYear(2015), 2012);

	t.end();
});

test('should default to taking the current timestamp', function (t) {
	t.is(lastLeapYear(), 2012);

	t.end();
});
