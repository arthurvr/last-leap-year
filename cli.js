#!/usr/bin/env node
'use strict';
var meow = require('meow');
var lastLeapYear = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ last-leap-year [input]',
		'',
		'Examples',
		'  $ last-leap-year',
		'  2012',
		'',
		'  $ last-leap-year 2010',
		'  2008'
	]
});

var year = cli.input ? Number(cli.input) : (new Date()).getFullYear();
console.log(lastLeapYear(year));
