// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'hi julius!';
    const actual = myFunction('julius');

    expect.equal(actual, expected, 'julius');

    const expected2 = 'hi benny!';
    const actual2 = myFunction('benny');
    expect.equal(actual2, expected2, 'benny');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
