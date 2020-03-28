const optionsKeysLong = ['--action', '--shift', '--input', '--output'];
const optionsKeys = ['-a', '-s', '-i', '-o'];

const optionsData = {}
optionsKeysLong.forEach(el => { optionsData[el] = '' })


const createObjData = (incomingData) => {
  incomingData.forEach((item, i, arr) => optionsKeysLong.forEach((el, j)=> {
    if (item == el || item == optionsKeys[j]) optionsData[el] = arr[i + 1];
  }));

  return optionsData;
}

module.exports = createObjData;
