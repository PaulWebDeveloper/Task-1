const codeShift = require('./codeShift');

const decode = (str, shift) => codeShift(str, shift, 1);

module.exports = decode;
