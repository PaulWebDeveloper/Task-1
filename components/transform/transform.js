const fs = require('fs');
const action = require('../action/action');

const transform = (codeAction, shift, input, output) => {

  fs.readFile(input, 'utf8', function(error, data) {
    if (error) {
      console.log('File not found');
      return
    }

    data = action(codeAction, data, Number(shift));

    fs.writeFile(output, data, function(error) {
      if (error) {
        console.log('Error');
        return
      }
    });
  });

}
module.exports = transform;