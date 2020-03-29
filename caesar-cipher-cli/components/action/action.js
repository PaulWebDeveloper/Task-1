const encode = require('./encode');
const decode = require('./decode');

const action = (value, data, shift) => {
  if (value == 'encode') return encode(data, shift);
  if (value == 'decode') return decode(data, shift);
}

module.exports = action;
