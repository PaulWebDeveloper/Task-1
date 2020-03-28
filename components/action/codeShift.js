const ABC = 'abcdefghijklmnopqrstuvwxyz';

const codeShift = (str, shift, num) => {
  return str.split('').map((item, i) => {

    for (let j = 0; j < ABC.length; j++) {
      if (item === ABC[j] || item === ABC[j].toUpperCase()) {
        let k = j + (shift + i) * num;
        while (k > 25) k -= 26;
        while (k < 0) k += 26;

        return (item === ABC[j]) ? ABC[k] : ABC[k].toUpperCase();
      }
    }
    return item;
  }).join('');
};

module.exports = codeShift;
