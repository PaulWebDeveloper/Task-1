const createObjData = require('./createObjData.js');

const checkOptions = (data) => {
  let optionsData = createObjData(data);
  let options = [];

  for (let key in optionsData) {
    options.push(optionsData[key])
  }

  return options;
}

module.exports = checkOptions;
