/* eslint quote-props: 0 */
const test = require('ava');
const get = require('../lib/index');

const obj = {
    5: 'a',
    '23': 'b',
    '1-10': 'c',
    '99,100-102': 'd',
    '200.5': 'e'
};

test('get number', t => {
    t.is(get(obj, 5), 'a');
    t.is(get(obj, '5'), 'a');
    t.is(get(obj, 23), 'b');
    t.is(get(obj, '23'), 'b');
    t.is(get(obj, 99), 'd');
    t.is(get(obj, '99'), 'd');
});

test('get float', t => {
    t.is(get(obj, 200.5), 'e');
    t.is(get(obj, '200.5'), 'e');
});

test('get range', t => {
    t.is(get(obj, 2), 'c');
    t.is(get(obj, 101), 'd');
});

test('get number that doesnt satisfy any key', t => {
    t.is(get(obj, 24), undefined);
    t.is(get(obj, '24'), undefined);
    t.is(get(obj, 24.5), undefined);
    t.is(get(obj, '24.5'), undefined);

    t.is(get(obj, null), undefined);
    t.is(get(obj, undefined), undefined);
    t.is(get(obj, NaN), undefined);
    t.is(get(obj, {}), undefined);
    t.is(get(obj, []), undefined);
    t.is(get(obj, ''), undefined);
    t.is(get(obj, '1-10'), undefined);
});
