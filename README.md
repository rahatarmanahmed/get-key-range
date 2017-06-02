# get-key-range [![Build Status](https://travis-ci.org/rahatarmanahmed/get-key-range.svg?branch=master)](https://travis-ci.org/rahatarmanahmed/get-key-range)

[![Greenkeeper badge](https://badges.greenkeeper.io/rahatarmanahmed/get-key-range.svg)](https://greenkeeper.io/)

Gets value from object whose key is in a certain range. For range format, see example below or the README for [is-in-range](http://npm.im/is-in-range). Only positive ranges are allowed.

If the ranges overlap, it will return the first satisfying range in the order given by `Object.keys()`.

## Installing

`npm install get-key-range`

## Example usage

```js
const get = require('get-key-range');

const obj = {
    5: 'a',
    '1-10': 'b',
    '99,100-102': 'c',
    '200.5': 'd'
};

get(obj, 2) // returns 'b'
get(obj, 5) // returns 'a'
get(obj, 99) // returns 'c'
get(obj, 200.5) // returns 'd'
get(obj, 0) // returns undefined
```
