const codeShift = require('./codeShift');

const encode = (str, shift) => codeShift(str, shift, 1);

module.exports = encode;
