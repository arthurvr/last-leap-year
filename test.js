import test from 'ava';
import lastLeapYear from './';

test('should return the last leap year', t => {
	t.is(lastLeapYear(new Date(-61206064203841)), 28);
	t.is(lastLeapYear(new Date('January 10, 2008')), 2008);

	t.end();
});

test('should handle passing a year', t => {
	t.is(lastLeapYear(2015), 2012);

	t.end();
});

test('should default to taking the current timestamp', t => {
	t.is(lastLeapYear(), 2012);

	t.end();
});
