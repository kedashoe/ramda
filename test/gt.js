var R = require('..');
var eq = require('./shared/eq');


describe('gt', function() {
  it('reports whether one item is less than another', function() {
    eq(R.gt(3, 5), false);
    eq(R.gt(6, 4), true);
    eq(R.gt(7.0, 7.0), false);
    eq(R.gt('abc', 'xyz'), false);
    eq(R.gt('abcd', 'abc'), true);
  });

  it('is curried', function() {
    var lt20 = R.gt(20);
    eq(lt20(10), true);
    eq(lt20(20), false);
    eq(lt20(25), false);
  });

});
