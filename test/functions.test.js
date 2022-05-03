// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'hi julius!';
    const actual = myFunction('julius');

    expect.equal(actual, expected, 'julius');

    const expected2 = 'hi finley!';
    const actual2 = myFunction('finley');
    expect.equal(actual2, expected2, 'finley');

    const expected3 = 'hi shy!';
    const actual3 = myFunction('shy');
    expect.equal(actual3, expected3, 'shy');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
