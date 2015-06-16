# last-leap-year [![Build Status](https://travis-ci.org/arthurvr/last-leap-year.svg?branch=master)](https://travis-ci.org/arthurvr/last-leap-year)

> Get the last leap year since a specific date


## Install

```
$ npm install --save last-leap-year
```


## Usage

```js
var lastLeapYear = require('last-leap-year');

lastLeapYear();
//=> 2012

lastLeapYear(2010);
//=> 2008

lastLeapYear(new Date('January 1, 2007'));
//=> 2004
```


## API

### lastLeapYear([year])

#### year

Type: _number_  
Default: _Current year_

### lastLeapYear([date])

#### date

Type: instance of `Date`  
Default: `new Date()`


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
