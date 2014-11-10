var assert = require('assert');
var R = require('..');

describe('transducers', function() {
    it('composes, transforms and reduces', function() {
        var odd = function odd(x) {return x % 2 === 1;};
        var triple = function triple(x) {return x * 3;};
        var xf = R.xf.compose(
            R.filter(odd),
            R.map(triple)
        );
        assert.deepEqual(R.xf.transduce(xf, R.xf.concat, [], [1, 2, 3, 4]), [3, 9]);
    });
});
