const createObjData = require('./createObjData.js');

const checkErrors = (data) => {
  let optionsData = createObjData(data);

  for (let key in optionsData) {
    if (optionsData[key] == '' || optionsData[key] == undefined) {
      console.log('Erorr ' + key +' is failed')
    }
  }

  return true;
}

module.exports = checkErrors;
