'use strict';
var uncurryThis = require('../internals/function-uncurry-this-clause');
var arrayBufferByteLength = require('../internals/array-buffer-byte-length');

var slice = uncurryThis(ArrayBuffer.prototype.slice);

module.exports = function (O) {
  if (!slice || arrayBufferByteLength(O) !== 0) return false;
  try {
    slice(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};
