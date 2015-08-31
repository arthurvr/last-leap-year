'use strict';
var assert = require('assert');
var lastLeapYear = require('./');

it('should return the last leap year', function () {
	assert.strictEqual(lastLeapYear(new Date(-61206064203841)), 28);
	assert.strictEqual(lastLeapYear(new Date('January 10, 2008')), 2008);
});

it('should handle passing a year', function () {
	assert.strictEqual(lastLeapYear(2015), 2012);
});

it('should default to taking the current timestamp', function () {
	assert.strictEqual(lastLeapYear(), 2012);
});
