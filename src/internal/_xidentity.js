var _curry1 = require('./_curry1');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XIdentity(xf) {
    this.xf = xf;
    this.f = null;
  }
  XIdentity.prototype['@@transducer/init'] = _xfBase.init;
  XIdentity.prototype['@@transducer/result'] = _xfBase.result;
  XIdentity.prototype['@@transducer/step'] = function(result, input) {
    console.log('identity transducer!', result, input);
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry1(function _xidentity(xf) { return new XIdentity(xf); });
  
})();
