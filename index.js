const program = require('commander');
const fs = require('fs');
const path = require('path')
const checkErrors = require('./components/options/checkErrors');
const checkOptions = require('./components/options/checkOptions');
const transform = require('./components/transform/transform');


let result = checkErrors(process.argv)

if (result) {
  let options = checkOptions(process.argv);
  transform(options[0],options[1],options[2],options[3])
}
