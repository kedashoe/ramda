var assert = require('assert');

var R = require('..');


describe('identity', function() {
  it('returns its first argument', function() {
    // assert.strictEqual(R.identity(undefined), undefined);
    assert.strictEqual(R.identity('foo'), 'foo');
    assert.strictEqual(R.identity('foo', 'bar'), 'foo');
  });
  
  it('transduces??', function(){
    assert.strictEqual(R.transduce(R.compose(R.map(R.add(1)), R.identity(), R.take(2)), R.add, '', [1, 2, 3, 4]), '23');
  })

  it('has length 1', function() {
    assert.strictEqual(R.identity.length, 1);
  });
});
