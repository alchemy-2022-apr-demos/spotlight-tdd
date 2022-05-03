// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'hi julie!';
    const actual = myFunction('julie');

    expect.equal(actual, expected, 'julie');

    const expected2 = 'hi benny!';
    const actual2 = myFunction('benny');
    expect.equal(actual2, expected2, 'benny');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
